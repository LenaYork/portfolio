import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'cafe-site',
    title: 'Café Website',
    description: 'Bilingual website (English/Greek) for a café with animated video footer and interactive chatbot',
    longDescription: 'Fully responsive website with admin panel for menu updates. Features: bilingual support (EN/GR), animated underwater video footer, and a virtual assistant that answers FAQs and suggests menu items.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://greekcafe.netlify.app/',
    imageUrl: './images/projects/cafe-site.png',
    status: 'active',
    type: 'web',
  },
  {
    id: 'yakori',
    title: 'Yakori — Mental Wellness App',
    description: 'Offline-first mobile app for psychological self-support. Created by a psychologist.',
    longDescription: 'A React Native app for emotional balance and self-support. Works completely offline — your data never leaves your phone. All supportive phrases are always with you. Designed with psychological expertise.',
    techStack: ['React Native', 'Context API', 'AsyncStorage', 'React Navigation'],
    // googlePlayUrl будет добавлен позже
    status: 'ready-for-release', type: 'mobile',
  },
  {
    id: 'words-web',
    title: 'Language Learning App (Web)',
    description: 'Interactive vocabulary app with spaced repetition and progress tracking',
    longDescription: 'Learn new words with flashcards, quizzes, and personalized progress stats.',
    techStack: ['React', 'TypeScript', 'Context API', 'SCSS'],
    status: 'in-development',
    type: 'web',
  },
  {
    id: 'words-mobile',
    title: 'Language Learning App (Mobile)',
    description: 'Cross-platform mobile version with offline support',
    techStack: ['React Native', 'TypeScript', 'Context API', 'AsyncStorage'],
    status: 'coming-soon',
    type: 'mobile',
  },
  {
    id: 'world-time',
    title: 'World Time Tracker',
    description: 'Track time zones across different countries — perfect for remote teams',
    longDescription: 'Web application + NPM widget that can be embedded in any project. Shows current time in multiple time zones with customizable display.',
    techStack: ['React', 'TypeScript', 'API', 'NPM Package'],
    status: 'in-development',
    type: 'web',
  },
  {
    id: 'desktop-app',
    title: 'Desktop Organizer',
    description: 'Cross-platform desktop application for task management',
    techStack: ['Electron', 'React', 'TypeScript', 'IndexedDB'],
    status: 'coming-soon',
    type: 'desktop',
  },
];