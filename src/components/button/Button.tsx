import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  href: string;
  text: string;
  icon?: React.ReactElement;
};

const Button = ({ href = '#', text = '', icon }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="btn px-10 rounded-full bg-white hover:bg-gray-900 hover:text-white shadow-md"
    >
      {text} {icon}
    </Link>
  );
};

export default Button;
