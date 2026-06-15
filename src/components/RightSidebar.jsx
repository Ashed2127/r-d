import Avatar from './Avatar';
import { SearchIcon, VerifiedIcon, SettingsIcon } from './Icons';
import { trends, suggestions } from '../data';

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="search-wrap">
        <span className="search-icon"><SearchIcon /></span>
        <input className="search-input" placeholder="Search" />
      </div>

      <section className="widget">
        <h2 className="widget-title">Subscribe to Premium</h2>
        <p className="widget-text">
          Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <button className="widget-button">Subscribe</button>
      </section>

      <section className="widget">
        <h2 className="widget-title">What's happening</h2>
        <div className="trend-list">
          {trends.map((trend) => (
            <button key={trend.id} className="trend-item" type="button">
              <div className="trend-text">
                <span className="trend-category">{trend.category}</span>
                <span className="trend-topic">{trend.topic}</span>
                <span className="trend-posts">{trend.posts}</span>
              </div>
              <span className="trend-more" aria-hidden="true">···</span>
            </button>
          ))}
        </div>
        <button className="widget-link" type="button">Show more</button>
      </section>

      <section className="widget">
        <h2 className="widget-title">Who to follow</h2>
        <div className="suggestion-list">
          {suggestions.map((user) => (
            <div className="suggestion-item" key={user.id}>
              <Avatar src={user.avatar} alt={user.name} size={40} />
              <div className="suggestion-info">
                <div className="suggestion-name-row">
                  <span className="suggestion-name">{user.name}</span>
                  <VerifiedIcon />
                </div>
                <span className="suggestion-handle">@{user.handle}</span>
              </div>
              <button className="follow-btn" type="button">Follow</button>
            </div>
          ))}
        </div>
        <button className="widget-link" type="button">Show more</button>
      </section>

      <footer className="sidebar-footer">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Accessibility</a>
        <a href="#">Ads info</a>
        <span>© 2026 Social Corp.</span>
      </footer>
    </aside>
  );
}

export default RightSidebar;
