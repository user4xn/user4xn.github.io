import Image from 'next/image';
import { MapPin } from 'lucide-react';

import ProfileHeadshot from '/public/images/wildan-headshot.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={ProfileHeadshot}
              alt="Headshot of Wildan"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-white max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] rounded-[50px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px] rounded-[50px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Wildan{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              An enthusiastic Back End Developer With experience in backend development, full-stack roles, and project management.<br/>
              My technical abilities are supported by hands-on experience with technologies such as Golang, PHP (Laravel, CI), and JavaScript (Vue, Express), as well as my understanding of database management. I&apos;ve worked on plenty of projects, such as web-based integrations, internal tools, and large-scale government systems. I take pride in writing clean, bug-free code and making sure that every solution I create follows industry best practices.
              <br/>
              <br/>
              Collaboration is basic to my work, so I enjoy working closely with front-end developers, product teams, and other stakeholders to create systems that not only function properly but also provide a consistent user experience.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Purbalingga, Indonesia</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Freelance Ready</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
