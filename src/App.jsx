import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import TweetComposer from './components/TweetComposer';
import TweetCard from './components/TweetCard';
import { SettingsIcon } from './components/Icons';
import { initialTweets } from './data';

const tabs = [
  { id: 'for-you', label: 'For you' },
  { id: 'following', label: 'Following' },
];

function App() {
  const [tweets, setTweets] = useState(initialTweets);
  const [activeTab, setActiveTab] = useState('for-you');

  // Highlight the most recent tweets at the top
  useEffect(() => {
    const id = window.setInterval(() => {
      setTweets((prev) => [...prev].sort((a, b) => b.timestamp - a.timestamp));
    }, 60000);
    return () => window.clearInterval(id);
  }, []);

  const handlePost = (content, image) => {
    const newTweet = {
      id: 't' + Date.now(),
      userId: 'me',
      content,
      image: image || null,
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 1,
      timestamp: Date.now(),
      liked: false,
      retweeted: false,
      bookmarked: false,
    };
    setTweets((prev) => [newTweet, ...prev]);
  };

  const handleAction = (id, type) => {
    setTweets((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        switch (type) {
          case 'like':
            return {
              ...t,
              liked: !t.liked,
              likes: t.liked ? t.likes - 1 : t.likes + 1,
            };
          case 'retweet':
            return {
              ...t,
              retweeted: !t.retweeted,
              retweets: t.retweeted ? t.retweets - 1 : t.retweets + 1,
            };
          case 'bookmark':
            return { ...t, bookmarked: !t.bookmarked };
          default:
            return t;
        }
      })
    );
  };

  return (
    <div className="app">
      <Sidebar />

      <main className="feed">
        <header className="feed-header">
          <h1 className="feed-title">Home Sweet Home</h1>
          <button className="feed-settings" type="button" aria-label="Settings">
            <SettingsIcon />
          </button>
        </header>

        <div className="feed-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`feed-tab ${activeTab === tab.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <span className="feed-tab-indicator" />}
            </button>
          ))}
        </div>

        <TweetComposer onPost={handlePost} />

        <div className="tweet-list">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} onAction={handleAction} />
          ))}
          <div className="feed-end">
            <span>·</span>
            <span>You're all caught up</span>
            <span>·</span>
          </div>
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}

export default App;
