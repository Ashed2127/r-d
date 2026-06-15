import Avatar from './Avatar';
import {
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  ViewsIcon,
  ShareIcon,
  BookmarkIcon,
  VerifiedIcon,
  MoreIcon,
} from './Icons';
import { formatTime, formatCount, users } from '../data';

function TweetCard({ tweet, onAction }) {
  const user = users.find((u) => u.id === tweet.userId);

  return (
    <article className="tweet">
      <Avatar src={user.avatar} alt={user.name} size={44} className="tweet-avatar" />
      <div className="tweet-body">
        <header className="tweet-header">
          <div className="tweet-author">
            <span className="tweet-name">{user.name}</span>
            {user.verified && <VerifiedIcon />}
            <span className="tweet-handle">@{user.handle}</span>
            <span className="tweet-dot">·</span>
            <span className="tweet-time">{formatTime(tweet.timestamp)}</span>
          </div>
          <button className="tweet-more" aria-label="More options">
            <MoreIcon />
          </button>
        </header>

        <div className="tweet-content">
          {tweet.content.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {tweet.image && (
          <div className="tweet-image">
            <img src={tweet.image} alt="post media" loading="lazy" />
          </div>
        )}

        <div className="tweet-actions">
          <button className="action action-reply" onClick={() => onAction(tweet.id, 'reply')}>
            <span className="action-icon"><ReplyIcon /></span>
            <span className="action-count">{formatCount(tweet.replies)}</span>
          </button>
          <button
            className={`action action-retweet ${tweet.retweeted ? 'is-active' : ''}`}
            onClick={() => onAction(tweet.id, 'retweet')}
          >
            <span className="action-icon"><RetweetIcon /></span>
            <span className="action-count">{formatCount(tweet.retweets)}</span>
          </button>
          <button
            className={`action action-like ${tweet.liked ? 'is-active' : ''}`}
            onClick={() => onAction(tweet.id, 'like')}
          >
            <span className="action-icon"><LikeIcon filled={tweet.liked} /></span>
            <span className="action-count">{formatCount(tweet.likes)}</span>
          </button>
          <button
            className={`action action-bookmark ${tweet.bookmarked ? 'is-active' : ''}`}
            onClick={() => onAction(tweet.id, 'bookmark')}
            aria-label="Bookmark"
          >
            <span className="action-icon"><BookmarkIcon filled={tweet.bookmarked} /></span>
          </button>
          <button className="action action-share" aria-label="Share" onClick={() => onAction(tweet.id, 'share')}>
            <span className="action-icon"><ShareIcon /></span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default TweetCard;
