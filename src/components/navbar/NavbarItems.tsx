import Link from 'next/link';

const NavbarItems = () => {
  return (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/recipes'}>Recipes</Link>
      </li>
      <li>
        <Link href={'/about'}>About Us</Link>
      </li>
      <li>
        <Link href={'/contact'}>Contact Us</Link>
      </li>
    </>
  );
};

export default NavbarItems;
