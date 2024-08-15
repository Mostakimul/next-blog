'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PiCaretCircleRightThin } from 'react-icons/pi';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContainerWrapper from '../ContainerWrapper';

const recipes = [
  {
    id: '1',
    title: 'Homemade Brunch',
    description:
      "This avocado salad is a refreshing and vibrant dish, perfect for a light meal or side. It features creamy avocado chunks mixed with crisp cucumber, juicy cherry tomatoes, and red onion for a bit of zing. A squeeze of fresh lime juice adds tang, while cilantro and a drizzle of olive oil bring everything together with a touch of brightness. It's simple, healthy, and full of flavor!",
    rating: 5.0,
    totalReviews: 536,
    prepTime: '40 mins',
    totalIngredients: 9,
    totalCalories: 600,
    recipeImage: '/reciepe/menu-hero-1.png',
  },
  {
    id: '2',
    title: 'Classic Caesar Salad',
    description:
      "This classic Caesar salad is a timeless favorite, made with crisp romaine lettuce, crunchy croutons, and freshly grated Parmesan cheese. Tossed with a tangy and creamy Caesar dressing, this salad offers the perfect balance of texture and flavor. A sprinkle of black pepper and a squeeze of lemon juice elevate the dish to perfection. It's a healthy and satisfying choice for any meal.",
    rating: 4.8,
    totalReviews: 432,
    prepTime: '30 mins',
    totalIngredients: 7,
    totalCalories: 450,
    recipeImage: '/reciepe/menu-hero-2.png',
  },
  {
    id: '3',
    title: 'Spaghetti Carbonara',
    description:
      "A classic Italian pasta dish, spaghetti carbonara features a creamy sauce made from eggs, Parmesan, and crispy pancetta. It's quick to make, yet packed with rich flavors that will leave you craving more. A sprinkle of black pepper and Parmesan on top gives it a perfect finish.",
    rating: 4.7,
    totalReviews: 654,
    prepTime: '25 mins',
    totalIngredients: 6,
    totalCalories: 700,
    recipeImage: '/reciepe/menu-hero-3.png',
  },
  {
    id: '4',
    title: 'Greek Salad',
    description:
      'A healthy and refreshing dish, the Greek salad combines crunchy cucumbers, juicy tomatoes, Kalamata olives, and crumbled feta cheese, all tossed in a light lemon vinaigrette. This salad is bursting with Mediterranean flavors and is perfect for a light lunch or a side dish.',
    rating: 4.9,
    totalReviews: 389,
    prepTime: '20 mins',
    totalIngredients: 8,
    totalCalories: 320,
    recipeImage: '/reciepe/menu-hero-4.png',
  },
  {
    id: '5',
    title: 'Grilled Chicken Tacos',
    description:
      'These grilled chicken tacos are packed with flavor, featuring seasoned chicken breast, fresh pico de gallo, creamy avocado, and a sprinkle of cilantro all wrapped in a warm corn tortilla. A squeeze of lime over the top adds the perfect tang to this delicious meal.',
    rating: 4.6,
    totalReviews: 284,
    prepTime: '35 mins',
    totalIngredients: 10,
    totalCalories: 480,
    recipeImage: '/reciepe/menu-hero-5.png',
  },
];

const Hero = () => {
  return (
    <section className="pt-16">
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
                    <Link
                      href={'/'}
                      className="btn px-10 rounded-full bg-white shadow-md"
                    >
                      View Recipe <PiCaretCircleRightThin className="text-xl" />
                    </Link>
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
