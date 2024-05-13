import { Github, Instagram, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoGo from '/public/images/logos/icon-go.svg';
import LogoVue from '/public/images/logos/icon-vue.svg';
import LogoPostman from '/public/images/logos/icon-postman.svg';
import LogoLaravel from '/public/images/logos/icon-laravel.svg';
import LogoCi from '/public/images/logos/icon-ci.svg';
import LogoRedis from '/public/images/logos/icon-redis.svg';
import LogoRabbitMQ from 'public/images/logos/icon-rabbitmq.svg'

import LogoWsb from '/public/images/logos/logo-wsb.svg';

import LogoKomerce from '/public/images/logos/logo-komerce.svg';
import LogoKomerceLight from '/public/images/logos/logo-komerce-light.svg';
import LogoMardizu from '/public/images/logos/logo-mardizu.svg';
import LogoMardizuLight from '/public/images/logos/logo-mardizu-light.svg';

import ProjectSirupat from '/public/images/project-sirupat.png';
import ProjectEarsip from '/public/images/project-earsip.png';
import ProjectSimpel from '/public/images/project-simpel.png';
import ProjectKaznet from '/public/images/project-kaznet.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/user4xn',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/user4xn',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/its.dannnnn',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/wildan-candra/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Golang',
    logo: LogoGo,
    url: 'https://go.dev/',
  },
  {
    label: 'Laravel',
    logo: LogoLaravel,
    url: 'https://laravel.com/',
  },
  {
    label: 'Codeigniter',
    logo: LogoCi,
    url: 'https://www.codeigniter.com/',
  },
  {
    label: 'Redis',
    logo: LogoRedis,
    url: 'https://redis.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Vue.js',
    logo: LogoVue,
    url: 'https://vuejs.org/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://www.postman.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'RabbitMQ',
    logo: LogoRabbitMQ,
    url: 'https://www.rabbitmq.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoKomerce,
    darkModeLogo: LogoKomerceLight,
    logoAlt: 'Komerce Logo',
    position: 'Back End Developer',
    startDate: new Date(2022, 7),
    currentlyWorkHere: true,
    summary: [
      'Write and develop program code that is met the requirements, with minimal bugs, and in accordance with industry best practices.',
      'Conferred with front-end developers to construct algorithms and flowcharts.',
      'Collaborated with departments to discuss technical issues, software system design and maintenance.',
      'Ensuring cross-platform optimization for web and mobile devices.',
      'integrate system with shipping provider such as JNE, SICEPAT, IDEXPRESS, SAP, NINJA, J&T.',
      'Do any required technical documentation especially API Docs.',
      'Complete task that provided by Product Team.',
      'Maintain to ensure that the deployed code has no problems.',
      'Monitor and ensure the system developed is running as expected.',
      'Assist customer support while on user report.',
      'Handle company core logic such as system shipment cost calculate, order service and user balance & transaction service.',
      'Contributed on 3 company products (Komship, Kompack, Komclass) and several services.',
    ],
  },
  {
    logo: LogoMardizu,
    darkModeLogo: LogoMardizuLight,
    logoAlt: 'Mardizu Logo',
    position: 'Fullstack Web Developer',
    startDate: new Date(2020, 7),
    endDate: new Date(2022, 6),
    summary: [
      'Planned and executed new app for internal staff to increase staff work effectiveness.',
      'Troubleshot problems and diagnosed system faults.',
      'Optimized team training and staff development with builded internal app.',
      'Digitize repetitious documentation procedures for easier access to documents and logs.',
      'Research for new tech that can be implemented on company business.',
      'Build a company internal apps and landing page.',
      'Setting up and manage panel server including domains and SEO.',
      'Deploy to servers.',
    ],
  },
  {
    logo: LogoWsb,
    logoAlt: 'WSB Logo',
    position: 'Freelance Web Developer',
    startDate: new Date(2020, 0),
    endDate: new Date(2017, 3),
    summary: [
      'Worked as a full stack developer (Codeigniter).',
      'Handled special projects designated by Product Manager.',
      'Created backup files on servers and directories to avoid data loss.',
      'Participated as Fullstack Developer build a core feature for Restaurant POS with several stock monitoring.',
      'Setup complete project on client.',
      'Synchronize local to cloud data.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'E-Arsip Digital (Digital Archive App)',
    description:
      `A platform for indonesian Ministry of Marine Affairs and Fisheries, designed to facilitate efficient and
      organized management of budget-related documents and records. This application aims to provide a centralized system for the ministry
      to store, track, and access budget-related information and data.`,
    url: '#',
    previewImage: ProjectEarsip,
    technologies: [
      'Laravel',
      'Bootstrap',
      'Redis',
    ],
  },
  {
    name: 'Sirupat (Meeting Room System)',
    description:
      `Called Sirupat are an application for recording and scheduling rooms and meetings. 
      The aim is to ensure that the meeting runs according to schedule and is organized, it also aims to monitor the absence of 
      the meeting participants concerned.`,
    url: '#',
    previewImage: ProjectSirupat,
    technologies: [
      'Laravel', 
      'Bootstrap',
      'Redis',
      'Go',
      'Livewire',
    ],
  },
  {
    name: 'S.I.M.P.E.L (Ship Parking Management)',
    description:
      `I work as Backend for this ship parking management which was made for one of the ports in Indonesia, specifically the Tegal Sari port which is also part of the KKP.
      The project aimed to develop a mobile application that allows users to track and
      periodically send GPS coordinates from their mobile devices to the ship parking system via an API using Flutter.`,
    url: '#',
    previewImage: ProjectSimpel,
    technologies: [
      'Go', 
      'Websocket',
      'Redis',
      'PostgreSQL',
      'Firebase',
      'Flutter',
      'Vue',
      'RabbitMQ'
    ],
  },
  {
    name: 'Kaznet (Volunteer App Network)',
    description:
      `Application that aims to obtain analytical data from volunteers for the Indonesian Election in Cianjur and Bogor 2024, i work as Frontend here.`,
    url: '#',
    previewImage: ProjectKaznet,
    technologies: [
      'Vue', 
      'Bootstrap Vue',
      'Redis',
      'Go',
      'MongoDB',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  // {
  //   personName: 'Krisztian Gyuris',
  //   personAvatar: AvatarKrisztian,
  //   title: 'Founder - inboxgenie.io',
  //   testimonial:
  //     'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  // },
];
