'use client';
import { recipes } from '@/data/recipes';
import Image from 'next/image';
import { PiCaretCircleRightThin } from 'react-icons/pi';
import 'swiper/css/effect-cube';
import { Autoplay, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button/Button';

const BestWeekSlider = () => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[EffectCube, Autoplay]}
      className="mySwiper rounded-2xl"
    >
      {recipes.slice(2, 4).map((recipe) => (
        <SwiperSlide>
          <div className="card grid grid-cols-5 bg-base-100 shadow-xl">
            <figure className="col-span-full md:col-span-2">
              <Image
                src={recipe.recipeImage}
                alt="Recipe"
                width={100}
                height={100}
                className="w-full animate-spin-slow"
              />
            </figure>
            <div className="card-body col-span-full md:col-span-3 self-center space-y-10">
              <h2 className="card-title">{recipe.title}</h2>
              <p>{recipe.description}</p>
              <div className="flex items-center font-light">
                <div className="border-r pr-5 border-solid">
                  <Image
                    src="/icons/clock.svg"
                    width={50}
                    height={50}
                    alt="clock"
                  />
                  <p>{recipe.prepTime}</p>
                </div>
                <div className="border-r px-5 border-solid">
                  <Image
                    src="/icons/ingridients.svg"
                    width={50}
                    height={50}
                    alt="ingredients"
                  />
                  <p>{recipe.totalIngredients} Ingredients</p>
                </div>
                <div className="pl-5">
                  <Image
                    src="/icons/kcal.svg"
                    width={50}
                    height={50}
                    alt="kcal"
                  />
                  <p>{recipe.totalCalories} Kcal</p>
                </div>
              </div>
              <div className="mt-10 mb-10 sm:mb-0">
                <Button
                  href="/recipes/1"
                  text="View Recipe"
                  icon={<PiCaretCircleRightThin className="text-xl" />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestWeekSlider;
