'use client';
import { recipes } from '@/data/recipes';
import Image from 'next/image';
import { PiCaretCircleRightThin } from 'react-icons/pi';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContainerWrapper from '../ContainerWrapper';
import Button from '../button/Button';

const Hero = () => {
  return (
    <section className="pt-32">
      <ContainerWrapper>
        <Swiper
          effect={'fade'}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {recipes.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="place-self-center">
                  <div className="w-full">
                    <h1 className="text-4xl md:text-6xl">{item.title}</h1>
                    <p className="text-sm font-light my-4 md:my-8">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 mb-10">
                    <div className="rating rating-md">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={star}
                          type="radio"
                          name={`rating-${item.id}`}
                          className="mask mask-star-2"
                          defaultChecked={star <= item.rating}
                        />
                      ))}
                    </div>
                    <p>
                      <span className="font-semibold">{item.rating} </span>(
                      {item.totalReviews} Reviews)
                    </p>
                  </div>
                  <div className="flex items-center font-light">
                    <div className="border-r pr-5 border-solid">
                      <Image
                        src="/icons/clock.svg"
                        width={50}
                        height={50}
                        alt="clock"
                      />
                      <p>{item.prepTime}</p>
                    </div>
                    <div className="border-r px-5 border-solid">
                      <Image
                        src="/icons/ingridients.svg"
                        width={50}
                        height={50}
                        alt="ingredients"
                      />
                      <p>{item.totalIngredients} Ingredients</p>
                    </div>
                    <div className="pl-5">
                      <Image
                        src="/icons/kcal.svg"
                        width={50}
                        height={50}
                        alt="kcal"
                      />
                      <p>{item.totalCalories} Kcal</p>
                    </div>
                  </div>

                  <div className="mt-10 mb-10 sm:mb-0">
                    <Button
                      href="/recipes"
                      text="View Recipe"
                      icon={<PiCaretCircleRightThin className="text-xl" />}
                    />
                  </div>
                </div>
                <div className="place-self-center">
                  <Image
                    src={item.recipeImage}
                    width={100}
                    height={100}
                    alt="menu"
                    className="w-80 h-80 lg:w-[550px] lg:h-[550px] animate-spin-slow"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerWrapper>
    </section>
  );
};

export default Hero;
