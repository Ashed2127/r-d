// Inline SVG icons for the social media app

export const HomeIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={filled ? 0 : 2}>
    <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExploreIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" strokeLinejoin="round" />
  </svg>
);

export const NotificationsIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 2 7H4c.5-1.5 2-3 2-7z" strokeLinejoin="round" />
    <path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round" />
  </svg>
);

export const MessagesIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <path d="M3 5h18v12H7l-4 4V5z" strokeLinejoin="round" />
  </svg>
);

export const BookmarksIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <path d="M6 4h12v17l-6-4-6 4V4z" strokeLinejoin="round" />
  </svg>
);

export const ProfileIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeLinecap="round" />
  </svg>
);

export const MoreIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

export const ReplyIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 11.5z" strokeLinejoin="round" />
  </svg>
);

export const RetweetIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" />
    <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" />
  </svg>
);

export const LikeIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <path d="M12 21s-7-4.5-9.5-9C.7 8.5 2.5 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.8 4.5 4 8-2.5 4.5-9.5 9-9.5 9z" strokeLinejoin="round" />
  </svg>
);

export const ViewsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" strokeLinecap="round" />
    <path d="M16 6l-4-4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2v14" strokeLinecap="round" />
  </svg>
);

export const BookmarkIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
    <path d="M6 4h12v17l-6-4-6 4V4z" strokeLinejoin="round" />
  </svg>
);

export const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#1d9bf0">
    <path d="M22.5 12.5L20.7 10.7l.5-2.5-2.5-.5L17.2 5.3 14.7 6 12.5 4.5 10.3 6 7.8 5.3 6.3 7.7l-2.5.5.5 2.5L2.5 12.5 4.3 14.3l-.5 2.5 2.5.5 1.5 2.4 2.5-.7 2.2 1.5 2.2-1.5 2.5.7 1.5-2.4 2.5-.5-.5-2.5 1.8-1.8z" />
    <path d="M9 12.2l2 2 4-4.2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ImageIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="M21 16l-5-5-7 8" strokeLinejoin="round" />
  </svg>
);

export const GifIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M8 10v4M8 12h2M13 10v4M13 10h2.5M13 12h2M18 10v4" strokeLinecap="round" />
  </svg>
);

export const PollIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="14" width="5" height="6" />
    <rect x="10" y="9" width="5" height="11" />
    <rect x="17" y="4" width="4" height="16" />
  </svg>
);

export const EmojiIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10" r="0.5" fill="currentColor" />
    <circle cx="15" cy="10" r="0.5" fill="currentColor" />
    <path d="M8 14c1 1.5 2.5 2 4 2s3-.5 4-2" strokeLinecap="round" />
  </svg>
);

export const ScheduleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);

export const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.5-4.5" strokeLinecap="round" />
  </svg>
);

export const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

export const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

export const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2l1.5 5L18 8.5 13.5 10 12 15l-1.5-5L6 8.5 10.5 7 12 2zM19 14l.8 2.5L22 17l-2.2.5L19 20l-.8-2.5L16 17l2.2-.5L19 14zM5 14l.8 2.5L8 17l-2.2.5L5 20l-.8-2.5L2 17l2.2-.5L5 14z" />
  </svg>
);

export const LogoIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
