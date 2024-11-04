import Image from 'next/image';

import FullPoseImage from '/public/images/wildan-fullpose.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={FullPoseImage}
              alt="Fullpose of Wildan"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-white max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] rounded-[50px]"
              style={{ objectFit: 'cover',  objectPosition: 'top' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] rounded-[50px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I work mostly as a back-end developer and am capable in Golang, PHP, and Node.JS.
            My areas of expertise are database management, creating RESTful APIs, and designing effective systems.
            I have experience with Agile approaches, and I&apos;m constantly willing to learn new things and sharpen my experience.
          </Typography>
          <Typography>
            I started as a web developer in 2019 and have since learned new technologies and taken on new challenges. 
            Now in my early thirties, I use modern technologies like Golang, Laravel, Vue, and Tailwind to build innovative web applications.
          </Typography>
          <Typography>
            I am an imaginative guy that enjoys working on projects from ideas to development.
          </Typography>
          <Typography>
          Outside of work, i enjoy to ride along cities with my bike or just enganging conversation with my friend, 
          i have keen interest on automotive, music, and games.
          </Typography>
          <Typography>And now for a few brief facts about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Part time freelancer</Typography>
              <Typography component="li">Full time backend developer</Typography>
            </ul>
          </div>
          <Typography>
            Finally, I would like to announce that I am open for freelance work. 
            Please feel free to reach out and say hello; I swear not to sting 😂.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
