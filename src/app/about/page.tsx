import Button from '@/components/button/Button';
import ContainerWrapper from '@/components/ContainerWrapper';
import Quote from '@/components/quote/Quote';
import ServiceCard from '@/components/serviceCard/ServiceCard';
import { services } from '@/data/services';

const About = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url('/pages/recipes-bg.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl pt-32 pb-10">
            <h1 className="mb-5 text-5xl font-bold">We Serve The Best Food</h1>
            <p className="mb-5">
              At the heart of our journey is a love for food and community.
              We're dedicated to bringing you the finest recipes, crafted with
              expertise and a commitment to quality, to inspire and elevate your
              everyday cooking experience.
            </p>
            <Button href="/recipes" text="See Our Recipes" />
          </div>
        </div>
      </div>
      <ContainerWrapper>
        <section className="pt-16">
          <div className="text-center max-w-5xl mx-auto space-y-3">
            <h1 className="text-center text-4xl md:text-6xl">Our Services</h1>
            <p className="font-light">
              We bring culinary excellence to your kitchen with services
              designed to inspire, guide, and elevate your cooking. From
              personalized recipe planning to cooking tips, our passion for
              flavor and commitment to quality are at the core of everything we
              do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-24 pb-12">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </ContainerWrapper>
      <Quote
        text='"Cooking is like love. It should be entered into with abandon or
              not at all."'
        author="Harriet Van Horne"
      />
    </>
  );
};

export default About;
