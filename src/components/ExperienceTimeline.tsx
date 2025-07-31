import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import company1 from '@/assets/company-1.png';
import company2 from '@/assets/company-2.png';
import airbnbLogo from '@/assets/airbnb.png';
import nusLogo from '@/assets/nus.png';
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

// Updated experience data with company logos.
export const experiences: ExperienceItem[] = [
  {
    title: 'Senior Product Designer',
    companyName: 'CreativeTech Inc.',
    icon: company1,
    iconBg: '#C4B5FD', // indigo-200
    date: '2024 – Present',
    points: [
      'Leading end-to-end product design for SaaS platform serving 50k+ users.',
      'Driving user-research initiatives and data-informed design decisions.',
      'Mentoring junior designers and shaping design strategy company-wide.',
    ],
  },
  {
    title: 'Lead UX Designer',
    companyName: 'Innovate Studio',
    icon: company2,
    iconBg: '#FDE68A', // amber-200
    date: '2022 – 2024',
    points: [
      'Oversaw multi-disciplinary team delivering web & mobile experiences.',
      'Redesigned core product resulting in 30% increase in engagement.',
      'Established scalable design system adopted across 3 product lines.',
    ],
  },
  {
    title: 'Product Design Intern',
    companyName: 'Airbnb',
    icon: airbnbLogo,
    iconBg: '#A7F3D0', // emerald-200
    date: 'Summer 2021',
    points: [
      'Collaborated on Host onboarding flow improvements.',
      'Built interactive prototypes for A/B testing with 200+ participants.',
      'Presented findings to cross-functional leadership.',
    ],
  },
  {
    title: 'B.A. (Hons) in Design',
    companyName: 'National University of Singapore',
    icon: nusLogo,
    iconBg: '#FBCFE8', // pink-200
    date: '2017 – 2021',
    points: [
      'Graduated with First-Class Honours, specialising in interaction design.',
      'President of Design Society organising annual design hackathon.',
      'Capstone project shortlisted for international design award.',
    ],
  },
];

const ExperienceCard: React.FC<ExperienceItem> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      dateClassName="text-[#1d1836]"
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
