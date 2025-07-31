import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import professionalHeadshot from '@/assets/professional-headshot.jpg';
import { Card } from '@/components/ui/card';

// Typing for experience items
export interface ExperienceItem {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

// Mock experience data – feel free to edit / extend.
export const experiences: ExperienceItem[] = [
  {
    title: 'Senior Freelance Designer',
    companyName: 'Independent Practice',
    icon: professionalHeadshot,
    iconBg: '#C4B5FD', // indigo-200
    date: '2024 – Present',
    points: [
      'Delivering end-to-end UI/UX for B2B and B2C products.',
      'Running user-research workshops and usability testing.',
      'Building scalable design systems for multi-platform apps.',
    ],
  },
  {
    title: 'Lead Designer',
    companyName: 'Creative Studio Co.',
    icon: professionalHeadshot,
    iconBg: '#FDE68A', // amber-200
    date: '2022 – 2024',
    points: [
      'Led a cross-functional design team of 6.',
      'Redefined branding for 12+ international clients.',
      'Mentored junior designers and established design ops.',
    ],
  },
  {
    title: 'Junior Designer',
    companyName: 'Design Agency',
    icon: professionalHeadshot,
    iconBg: '#A7F3D0', // emerald-200
    date: '2020 – 2022',
    points: [
      'Created responsive web mock-ups and mobile prototypes.',
      'Collaborated closely with developers for pixel-perfect handoff.',
      'Assisted in user-testing sessions and data synthesis.',
    ],
  },
  {
    title: 'B.A. in Visual Communication',
    companyName: 'Art & Design University',
    icon: professionalHeadshot,
    iconBg: '#FBCFE8', // pink-200
    date: '2016 – 2020',
    points: [
      'Graduated with honours, specialising in digital design.',
      'Led the student design society for 2 years.',
      'Capstone project featured in regional design showcase.',
    ],
  },
];

const ExperienceCard: React.FC<ExperienceItem> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
      <p className="text-secondary text-base font-semibold" style={{ margin: 0 }}>
        {experience.companyName}
      </p>

      <ul className="ml-5 mt-4 list-disc space-y-2">
        {experience.points.map((point, idx) => (
          <li
            key={`exp-point-${idx}`}
            className="text-sm tracking-wide text-white/90"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

/**
 * Main timeline component – can be dropped anywhere.
 */
const ExperienceTimeline: React.FC = () => {
  return (
    <div className="mt-12">
      {/* Optional heading wrapper using existing UI components */}
      <Card className="mb-10 border-none bg-transparent shadow-none">
        <h3 className="text-2xl font-serif font-semibold text-center">Professional Timeline</h3>
      </Card>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;
