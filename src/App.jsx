import { useEffect, useState } from 'react'
import './App.css'

const initialStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 176.21, change: 0.32 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 391.06, change: -0.18 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 244.27, change: 1.22 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 174.35, change: -0.73 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 1012.41, change: 0.94 },
]

const formatCurrency = value => value.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

const formatChange = value => `${value > 0 ? '+' : ''}${value.toFixed(2)}%`

const tickPrice = stock => {
  const drift = stock.price * (Math.random() * 0.015 - 0.0075)
  const nextPrice = Math.max(1, stock.price + drift)
  const change = ((nextPrice - stock.price) / stock.price) * 100
  return {
    ...stock,
    price: Number(nextPrice.toFixed(2)),
    change: Number(change.toFixed(2)),
  }
}

function App() {
  const [stocks, setStocks] = useState(initialStocks)
  const [symbolInput, setSymbolInput] = useState('')
  const [message, setMessage] = useState('Live watchlist refreshing every 2 seconds')

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => prevStocks.map(tickPrice))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handleAddSymbol = event => {
    event.preventDefault()
    const symbol = symbolInput.trim().toUpperCase()
    if (!symbol) return
    if (stocks.some(stock => stock.symbol === symbol)) {
      setMessage(`${symbol} is already on the watchlist`)
      return
    }

    setStocks(prev => [
      ...prev,
      {
        symbol,
        name: `${symbol} Holdings`,
        price: Number((Math.random() * 460 + 40).toFixed(2)),
        change: Number((Math.random() * 2 - 1).toFixed(2)),
      },
    ])
    setSymbolInput('')
    setMessage(`${symbol} added to watchlist`)
  }

  return (
    <main className="tracker-page">
      <section className="tracker-hero">
        <div>
          <span className="eyebrow">Realtime dashboard</span>
          <h1>Stock Tracker</h1>
          <p className="description">
            Monitor market momentum and active price movement with a live-style watchlist. The page simulates real-time updates and makes it easy to follow top tickers.
          </p>
        </div>

        <div className="hero-grid">
          <article className="hero-card">
            <span>Watchlist size</span>
            <strong>{stocks.length}</strong>
          </article>
          <article className="hero-card">
            <span>Status</span>
            <strong>{message}</strong>
          </article>
        </div>
      </section>

      <section className="watchlist-panel">
        <div className="watchlist-header">
          <div>
            <h2>My watchlist</h2>
            <p>Track symbol performance and intraday-style price changes.</p>
          </div>
          <form className="symbol-form" onSubmit={handleAddSymbol}>
            <label htmlFor="symbol">Add ticker</label>
            <div className="symbol-input-row">
              <input
                id="symbol"
                value={symbolInput}
                onChange={e => setSymbolInput(e.target.value)}
                placeholder="e.g. NFLX"
                aria-label="Stock symbol"
              />
              <button type="submit" className="button primary">
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="stock-grid">
          {stocks.map(stock => (
            <article key={stock.symbol} className="stock-card">
              <div className="stock-row">
                <div>
                  <span className="stock-symbol">{stock.symbol}</span>
                  <p className="stock-name">{stock.name}</p>
                </div>
                <span className={`stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                  {formatChange(stock.change)}
                </span>
              </div>
              <p className="stock-price">{formatCurrency(stock.price)}</p>
              <div className="price-bar">
                <div
                  className="price-fill"
                  style={{ width: `${Math.min(100, Math.abs(stock.change) * 3 + 12)}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tracker-note">
        <h2>About this tracker</h2>
        <p>
          This demo page uses simulated market movement to show how a realtime stock dashboard could look in a React app. You can add tickers to the watchlist and watch the quote cards update automatically.
        </p>
      </section>
    </main>
  )
}

export default App
