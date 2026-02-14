export enum View {
  WELCOME = 'WELCOME',
  MENU = 'MENU',
  STORY = 'STORY',
  LETTER = 'LETTER',
  COUNTDOWN = 'COUNTDOWN',
  MEMORIES = 'MEMORIES',
  CONTACT = 'CONTACT'
}

export interface StoryChapter {
  id: string;
  title: string;
  date?: string;
  content: string;
  audioSrc?: string;
}

export interface MemoryImage {
  id: string;
  url: string;
  caption: string;
}