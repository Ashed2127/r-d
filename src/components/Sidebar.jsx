import { useState } from 'react';
import {
  LogoIcon,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ProfileIcon,
  MoreIcon,
} from './Icons';
import Avatar from './Avatar';
import { currentUser } from '../data';

const navItems = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'explore', label: 'Explore', Icon: ExploreIcon },
  { id: 'notifications', label: 'Notifications', Icon: NotificationsIcon },
  { id: 'messages', label: 'Messages', Icon: MessagesIcon },
  { id: 'bookmarks', label: 'Bookmarks', Icon: BookmarksIcon },
  { id: 'profile', label: 'Profile', Icon: ProfileIcon },
];

function Sidebar() {
  const [active, setActive] = useState('home');

  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <a className="sidebar-logo" href="#" aria-label="Home">
          <LogoIcon />
        </a>

        <nav className="sidebar-nav">
          {navItems.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              className={`nav-item ${active === id ? 'is-active' : ''}`}
              onClick={() => setActive(id)}
            >
              <span className="nav-icon">
                <Icon filled={active === id} />
              </span>
              <span className="nav-label">{label}</span>
            </button>
          ))}
          <button type="button" className="nav-item">
            <span className="nav-icon"><MoreIcon /></span>
            <span className="nav-label">More</span>
          </button>
        </nav>

        <button className="post-fab" type="button">
          <span className="post-fab-label">Post</span>
          <span className="post-fab-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M3 3h6v2H5v4H3V3zm12 0h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6zm16 0h2v6h-6v-2h4v-4z" />
            </svg>
          </span>
        </button>

        <button className="profile-card" type="button">
          <Avatar src={currentUser.avatar} alt={currentUser.name} size={40} />
          <div className="profile-info">
            <span className="profile-name">{currentUser.name}</span>
            <span className="profile-handle">@{currentUser.handle}</span>
          </div>
          <span className="profile-more" aria-hidden="true">···</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
