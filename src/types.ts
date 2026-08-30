export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  topic: string;
  topicId?: string;
  keyMessage: string;
  bio: string;
  avatar: string;
  instagram?: string;
  linkedin?: string;
  tags: string[];
  featured?: boolean;
}

export interface ArchiveTalk {
  id: string;
  speaker: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  description: string;
  youtubeId?: string;
}

export interface ValueItem {
  number: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface FaqItem {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  status: 'Available' | 'Selling Fast' | 'Limited' | 'Coming Soon';
  badge?: string;
  perks: string[];
}
