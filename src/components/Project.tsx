import React from 'react';
type ProjectProps = {
  name: string;
  url: string;
  description: string;
};

const projectsData = [
  {
    id: 1,
    name: 'Hacker News Clone',
    description:
      'A hacker news clone that displays Top and Latest stories of Hacker News, built with React and React Query. ',
    url: 'https://github.com/arifimran5/hacker-news-clone',
  },
  {
    id: 2,
    name: 'Pro-Courses',
    description:
      'App where you can post about the courses you have taken recently and let the world know how the experience was. This is gonna help others to find good learning resources. ',
    url: 'https://github.com/arifimran5/pro-courses',
  },
];

const ProjectList = () => {
  return (
    <section className='mt-4 space-y-3'>
      {projectsData.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
        />
      ))}
    </section>
  );
};

const Project = ({ name, url, description }: ProjectProps) => {
  return (
    <div className='border-2 border-gray-200 rounded-md px-2 py-3'>
      <a href={url} target='_blank' rel='noreferrer' className='text-blue-500'>
        <h1 className='text-xl font-extrabold'>{name}</h1>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default ProjectList;
