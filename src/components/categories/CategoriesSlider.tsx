'use client';
import Image from 'next/image';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const categories = [
  {
    id: '1',
    title: 'Breakfast',
    icon: '/categories/bf.svg',
    coverImage: '/categories/bf_bg.jpg',
  },
  {
    id: '2',
    title: 'Lunch',
    icon: '/categories/lunch.svg',
    coverImage: '/categories/lunch_bg.jpg',
  },
  {
    id: '3',
    title: 'Dinner',
    icon: '/categories/dinner.svg',
    coverImage: '/categories/dinner_bg.jpg',
  },
  {
    id: '4',
    title: 'Desserts',
    icon: '/categories/desserts.svg',
    coverImage: '/categories/desserts_bg.jpg',
  },
  {
    id: '5',
    title: 'Vegan',
    icon: '/categories/vegan.svg',
    coverImage: '/categories/veg_bg.jpg',
  },
  {
    id: '6',
    title: 'Seafood',
    icon: '/categories/seafood.svg',
    coverImage: '/categories/seafood_bg.jpg',
  },
  {
    id: '7',
    title: 'Beverages',
    icon: '/categories/drinks.svg',
    coverImage: '/categories/drinks_bg.jpg',
  },
];

const CategoriesSlider = () => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper w-full h-[420px] md:w-[600px]"
    >
      {categories.map((category) => (
        <SwiperSlide
          key={category.id}
          className="relative flex items-center justify-center rounded-md overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${category.coverImage})`,
              filter: 'blur(3px)',
            }}
          ></div>
          <div
            className="absolute inset-0 bg-black opacity-40"
            style={{
              filter: 'blur(3px)',
            }}
          ></div>
          <div className="relative flex flex-col items-center text-center text-white p-4">
            <h4 className="text-2xl font-bold mb-2">{category.title}</h4>
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg">
              <Image
                src={category.icon}
                alt="icon"
                width={80}
                height={80}
                className="w-20 h-20 p-2"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesSlider;
