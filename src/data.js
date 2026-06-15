// Sample data for the social media app

export const currentUser = {
  id: 'me',
  name: 'You',
  handle: 'you',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You&backgroundColor=b6e3f4',
  bio: 'Living life one post at a time ✨',
  verified: false,
};

export const users = [
  {
    id: 'u1',
    name: 'Ada Lovelace',
    handle: 'ada_lovelace',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ada&backgroundColor=ffdfbf',
    verified: true,
  },
  {
    id: 'u2',
    name: 'Alan Turing',
    handle: 'alan_turing',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alan&backgroundColor=c0aede',
    verified: true,
  },
  {
    id: 'u3',
    name: 'Grace Hopper',
    handle: 'grace_hopper',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace&backgroundColor=d1d4f9',
    verified: true,
  },
  {
    id: 'u4',
    name: 'Linus Torvalds',
    handle: 'linus_torvalds',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linus&backgroundColor=ffd5dc',
    verified: false,
  },
  {
    id: 'u5',
    name: 'Margaret Hamilton',
    handle: 'margaret_h',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Margaret&backgroundColor=b6e3f4',
    verified: true,
  },
  {
    id: 'u6',
    name: 'Tim Berners-Lee',
    handle: 'tim_bl',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tim&backgroundColor=c1e1c5',
    verified: true,
  },
  {
    id: 'u7',
    name: 'Katherine Johnson',
    handle: 'katherine_j',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Katherine&backgroundColor=ffdfbf',
    verified: false,
  },
  {
    id: 'u8',
    name: 'Dennis Ritchie',
    handle: 'dmr_ritchie',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dennis&backgroundColor=c0aede',
    verified: true,
  },
];

const now = Date.now();
const minutes = (m) => now - m * 60 * 1000;
const hours = (h) => now - h * 60 * 60 * 1000;
const days = (d) => now - d * 24 * 60 * 60 * 1000;

export const initialTweets = [
  {
    id: 't1',
    userId: 'u1',
    content:
      "Just finished writing the first algorithm. Computing is going to change everything. 🚀",
    image: 'https://picsum.photos/seed/ada/600/400',
    likes: 12420,
    retweets: 3840,
    replies: 612,
    views: 184000,
    timestamp: minutes(12),
    liked: false,
    retweeted: false,
    bookmarked: false,
  },
  {
    id: 't2',
    userId: 'u2',
    content:
      "Can machines think? That's the question I've been pondering. Here's a test that might answer it... 🧠",
    image: null,
    likes: 8932,
    retweets: 2104,
    replies: 458,
    views: 142000,
    timestamp: hours(2),
    liked: true,
    retweeted: false,
    bookmarked: false,
  },
  {
    id: 't3',
    userId: 'u3',
    content:
      "Found a real bug in the Mark II. Literally a moth stuck in the relay. The term \"debugging\" was born today! 🐛",
    image: 'https://picsum.photos/seed/bug/600/400',
    likes: 24560,
    retweets: 7890,
    replies: 1024,
    views: 412000,
    timestamp: hours(5),
    liked: false,
    retweeted: true,
    bookmarked: true,
  },
  {
    id: 't4',
    userId: 'u4',
    content:
      "Talk is cheap. Show me the code. 💻\n\nAlso, show me your kernel patches.",
    image: null,
    likes: 18934,
    retweets: 4521,
    replies: 892,
    views: 256000,
    timestamp: hours(8),
    liked: false,
    retweeted: false,
    bookmarked: false,
  },
  {
    id: 't5',
    userId: 'u5',
    content:
      "We landed on the moon today. The software we wrote ran flawlessly. To all the young women in STEM: you belong here. 🌙👩‍💻",
    image: 'https://picsum.photos/seed/moon/600/400',
    likes: 45820,
    retweets: 12340,
    replies: 2104,
    views: 1240000,
    timestamp: days(1),
    liked: true,
    retweeted: false,
    bookmarked: true,
  },
  {
    id: 't6',
    userId: 'u6',
    content:
      "The web should be free and open for everyone. Here's a proposal for a decentralized hypertext system... 📄",
    image: null,
    likes: 6720,
    retweets: 1890,
    replies: 234,
    views: 89000,
    timestamp: days(1),
    liked: false,
    retweeted: false,
    bookmarked: false,
  },
  {
    id: 't7',
    userId: 'u7',
    content:
      "Did the math for the trajectory by hand. No electronic calculator. The numbers don't lie. 📐",
    image: 'https://picsum.photos/seed/trajectory/600/400',
    likes: 31200,
    retweets: 8920,
    replies: 1456,
    views: 587000,
    timestamp: days(2),
    liked: false,
    retweeted: false,
    bookmarked: false,
  },
  {
    id: 't8',
    userId: 'u8',
    content:
      "Co-created C with Ken Thompson. It's been called the foundation of modern computing. Pretty cool. ☕",
    image: null,
    likes: 14560,
    retweets: 3210,
    replies: 567,
    views: 198000,
    timestamp: days(3),
    liked: false,
    retweeted: false,
    bookmarked: false,
  },
];

export const trends = [
  { id: 'tr1', category: 'Technology · Trending', topic: 'React 19', posts: '124K posts' },
  { id: 'tr2', category: 'Trending in Technology', topic: '#WebDevelopment', posts: '89.4K posts' },
  { id: 'tr3', category: 'Science · Trending', topic: 'AI Research', posts: '67.2K posts' },
  { id: 'tr4', category: 'Trending', topic: '#100DaysOfCode', posts: '54.1K posts' },
  { id: 'tr5', category: 'Technology · Trending', topic: 'TypeScript', posts: '42.8K posts' },
  { id: 'tr6', category: 'Trending in Design', topic: '#UI', posts: '38.6K posts' },
];

export const suggestions = [
  { id: 'u9', name: 'Hedy Lamarr', handle: 'hedy_l', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hedy&backgroundColor=ffdfbf' },
  { id: 'u10', name: 'Nikola Tesla', handle: 'nikola_t', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nikola&backgroundColor=d1d4f9' },
  { id: 'u11', name: 'Marie Curie', handle: 'marie_c', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie&backgroundColor=c1e1c5' },
];

export const formatTime = (timestamp) => {
  const diff = Date.now() - timestamp;
  const m = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);

  if (m < 1) return 'now';
  if (m < 60) return `${m}m`;
  if (h < 24) return `${h}h`;
  if (d < 7) return `${d}d`;
  return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const formatCount = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
};
