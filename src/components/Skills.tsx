import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
const Skills = () => {
  return (
    <section className='mt-12'>
      <h2 className='text-3xl font-semibold'>Techs</h2>
      <div className='pl-4 mt-2 space-y-2'>
        <Technology icon={SiReact} text='React' />
        <Technology icon={SiTailwindcss} text='TailwindCSS' />
        <Technology icon={SiTypescript} text='Typescript' />
        <Technology icon={SiNodeDotJs} text='Node.js' />
        <Technology icon={SiNextDotJs} text='Next.js' />
      </div>
    </section>
  );
};

const Technology = ({ text, icon }: { text: ReactNode; icon: IconType }) => {
  return (
    <div className='flex items-center gap-4'>
      <span>{icon({ className: 'h-6 w-6' })}</span>
      <span className='text-lg'>{text}</span>
    </div>
  );
};

export default Skills;
