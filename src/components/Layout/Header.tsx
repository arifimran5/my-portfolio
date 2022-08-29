import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <nav className='space-x-6 md:space-x-16 xl:space-x-20 pt-10 pb-8 '>
      <NavItem href='/' text='/home' />
      <NavItem href='/projects' text='/projects' />
    </nav>
  );
};

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.route === href;

  return (
    <Link href={href}>
      {isActive ? (
        <a className='underline underline-offset-[5px] font-medium'>{text}</a>
      ) : (
        <a className='font-medium '>{text}</a>
      )}
    </Link>
  );
};

export default Navbar;
