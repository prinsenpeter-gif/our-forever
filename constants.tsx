import { StoryChapter, MemoryImage } from './types';

export const WEDDING_DATE = new Date('2026-05-10T00:00:00');

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "yes",
    title: 'The Day She Said Yes',
    date: 'June 27, 2016',
    content: "It was June 27th, 2016. I remember it vividly—you were in your school uniform. I came to find you after church, my heart pounding, waiting for a reply to the love I had confessed. When you finally looked at me and said, 'Yes, I love you,' I felt like the happiest man on the planet.",
    audioSrc: 'yes.mp3'
  },
  {
    id: "firstdate",
    title: 'Our First Date',
    content: "Do you remember our first date? We went for a movie, but the film didn't matter. We talked, we laughed, and we connected so well. In those simple moments, I knew I had found my soulmate.",
    audioSrc: 'firstdate.mp3'
  },
  {
    id: "engagement",
    title: 'Our Engagement',
    date: 'May 2025',
    content: "In May 2025, our families became one. We celebrated our engagement ceremony at my home, surrounded by loved ones. It was the official start of our countdown to forever.",
    audioSrc: 'engagement.mp3'
  }
];

export const MEMORIES: MemoryImage[] = [
  { id: '1', url: '/memories/photo1.jpeg', caption: 'One of our happiest memories ❤️' },
  { id: '2', url: '/memories/photo2.jpeg', caption: 'That smile still melts me 💕' },
  { id: '3', url: '/memories/photo3.jpeg', caption: 'Our laughter, my favorite sound ✨' },
  { id: '4', url: '/memories/photo4.jpeg', caption: 'Always by your side 🤍' },
  { id: '5', url: '/memories/photo5.jpeg', caption: 'My heart belongs to you 💖' },
];

export const CONTACT_INFO = {
  phone: '9074094737',
  email: 'EMAIL_HERE'
};