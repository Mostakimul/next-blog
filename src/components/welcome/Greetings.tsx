import Image from 'next/image';
import ContainerWrapper from '../ContainerWrapper';

const Greetings = () => {
  return (
    <ContainerWrapper>
      <section className="py-20 text-center space-y-16">
        <h2 className="text-4xl lg:text-6xl font-semibold uppercase">
          Hello & Welcome.
        </h2>
        <p className="text-base lg:text-lg font-light">
          "Hello! I'm Chef Mario, and I’m thrilled to share my passion for
          cooking with you. With over 15 years of culinary experience, I’ve had
          the privilege of mastering the art of creating dishes that not only
          satisfy the palate but also tell a story. My philosophy in the kitchen
          is simple: fresh, high-quality ingredients combined with a touch of
          creativity and love. Whether it's a simple salad or an intricate
          entrée, I believe that every dish has the potential to bring people
          together, create memories, and nourish the soul. Let’s embark on a
          culinary journey together—bon appétit!"
        </p>
        <div className="flex items-center justify-center">
          <Image
            src={'/sign.png'}
            alt="sign"
            width={100}
            height={100}
            className="w-48 h-auto"
          />
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default Greetings;
