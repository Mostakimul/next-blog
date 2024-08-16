import React from 'react';
import Button from '../button/Button';

type PageHeroProps = {
  image: string;
  title: string;
  description: string;
  button?: React.ReactElement;
};

const PageHero = ({ image, title, description, button }: PageHeroProps) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl pt-32 pb-10">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{description}</p>
          {button && <Button href="/recipes" text="See Our Recipes" />}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
