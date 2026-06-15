import { useState } from 'react';
import Avatar from './Avatar';
import {
  ImageIcon,
  GifIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  LocationIcon,
  SparkleIcon,
} from './Icons';
import { currentUser } from '../data';

const MAX_CHARS = 280;

function TweetComposer({ onPost }) {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const remaining = MAX_CHARS - text.length;
  const progress = Math.min(100, (text.length / MAX_CHARS) * 100);
  const isOver = remaining < 0;
  const canPost = text.trim().length > 0 && !isOver;

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canPost) return;
    onPost(text.trim(), image);
    setText('');
    setImage(null);
  };

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <Avatar src={currentUser.avatar} alt={currentUser.name} size={44} />
      <div className="composer-body">
        <textarea
          className="composer-textarea"
          placeholder="What's happening?!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
        />

        {image && (
          <div className="composer-image-preview">
            <img src={image} alt="preview" />
            <button
              type="button"
              className="image-remove"
              onClick={() => setImage(null)}
              aria-label="Remove image"
            >
              ×
            </button>
          </div>
        )}

        <div className="composer-actions">
          <div className="composer-tools">
            <label className="tool-btn" title="Media">
              <ImageIcon />
              <input type="file" accept="image/*" hidden onChange={handleImage} />
            </label>
            <button type="button" className="tool-btn" title="GIF"><GifIcon /></button>
            <button type="button" className="tool-btn" title="Poll"><PollIcon /></button>
            <button type="button" className="tool-btn" title="Emoji"><EmojiIcon /></button>
            <button type="button" className="tool-btn" title="Schedule"><ScheduleIcon /></button>
            <button type="button" className="tool-btn" title="Location"><LocationIcon /></button>
          </div>

          <div className="composer-submit">
            {text.length > 0 && (
              <div className={`progress-ring ${isOver ? 'is-over' : ''}`}>
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#2f3336" strokeWidth="2" />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke={isOver ? '#f4212e' : '#1d9bf0'}
                    strokeWidth="2"
                    strokeDasharray={`${(progress / 100) * 62.8} 62.8`}
                    strokeLinecap="round"
                    transform="rotate(-90 12 12)"
                  />
                </svg>
                {(remaining <= 20 && remaining >= 0) && (
                  <span className="progress-count">{remaining}</span>
                )}
              </div>
            )}
            <button type="submit" className="post-btn" disabled={!canPost}>
              <SparkleIcon />
              <span>Post</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TweetComposer;
