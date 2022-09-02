import { GrTwitter, GrLinkedin, GrMail, GrGithub } from 'react-icons/gr';
const Socials = () => {
  return (
    <section className='mt-6 flex space-x-4 sm:space-x-6 items-center'>
      <a
        href='https://twitter.com/arifdotai'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-800 text-4xl sm:text-4xl transition-all duration-150 ease-out'
      >
        <GrTwitter />
      </a>
      <a
        href='https://www.linkedin.com/in/arifimran5'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-800 text-4xl sm:text-4xl transition-all duration-150 ease-out'
      >
        <GrLinkedin />
      </a>
      <a
        href='https://www.github.com/arifimran5'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-800 text-4xl sm:text-4xl transition-all duration-150 ease-out'
      >
        <GrGithub />
      </a>
      <a
        href='mailto:arifimran505@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-800 text-4xl sm:text-4xl transition-all duration-150 ease-out'
      >
        <GrMail />
      </a>
    </section>
  );
};

export default Socials;
