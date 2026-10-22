import type { ComponentType, SVGProps } from 'react';
import {
  MusicNoteIcon,
  BookIcon,
  HandsIcon,
  MicIcon,
  DoveIcon,
  GlobeIcon,
  FamilyIcon,
} from '../icons/Icons';

export interface Program {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const programs: Program[] = [
  {
    icon: MusicNoteIcon,
    title: 'Worship & Praise',
    description:
      'Experience spirit-filled Telugu Christian worship songs that lift your heart and help you draw closer to God — anytime, anywhere.',
  },
  {
    icon: BookIcon,
    title: 'Bible Reading & Exposition',
    description:
      'Listen to clear, scriptural teaching and verse-by-verse explanations from the Living Word of the Living God that bring spiritual depth and understanding.',
  },
  {
    icon: HandsIcon,
    title: 'Devotions & Daily Encouragement',
    description:
      'Start and end your day with short reflections, prayers, meditations, and promises from God\u2019s Word that strengthen your walk with Christ.',
  },
  {
    icon: MicIcon,
    title: 'Testimonies & Faith Stories',
    description:
      'Be inspired by powerful testimonies of God\u2019s miracles, transformed lives, and stories of hope from believers across India.',
  },
  {
    icon: DoveIcon,
    title: 'Christian Living & Discipleship',
    description:
      'Practical, biblical guidance on living a Christ-centered life, growing in faith, walking in obedience, and fulfilling God\u2019s purpose for your life.',
  },
  {
    icon: GlobeIcon,
    title: 'Missions & Outreach',
    description:
      'Encouraging messages on indigenous missions, local church leadership, community development, and serving God faithfully wherever you are.',
  },
  {
    icon: FamilyIcon,
    title: 'Family, Youth & Children',
    description:
      'Special programs for families, youth, and children with songs, stories, counsel, and biblical wisdom to build godly homes and stronger relationships.',
  },
  {
    icon: MicIcon,
    title: 'Talk Shows & Conversations',
    description:
      'Engaging discussions with pastors, leaders, Bible teachers, and believers on Christian faith, challenges, culture, and everyday spiritual growth.',
  },
];
