import ContainerWrapper from '@/components/ContainerWrapper';
import Image from 'next/image';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { IoFastFoodOutline, IoStatsChartOutline } from 'react-icons/io5';
const nutrations = {
  energy: 600,
  calories: 600,
  sugar: '5g',
  fat: '15g',
  carbs: '50g',
  protein: '10g',
};

const ingredients = [
  'Sweet potatoes',
  'Quinoa',
  'Avocado',
  'Chickpeas',
  'Fresh greens',
  'Tahini dressing',
];

const preparationSteps = [
  'Preheat the oven to 400°F (200°C).',
  'Toss sweet potatoes with olive oil and season with salt and pepper.',
  'Roast sweet potatoes in the oven for 25 minutes, or until tender.',
  'Cook quinoa according to package instructions.',
  'In a large bowl, combine roasted sweet potatoes, cooked quinoa, avocado, chickpeas, and fresh greens.',
  'Drizzle with tahini dressing and toss to combine.',
  'Serve immediately or chill in the refrigerator before serving.',
];
const SingleRecipe = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url('/pages/recipe-single.jpg')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-5xl pt-44 pb-10">
            <h1 className="mb-10 text-3xl md:text-5xl font-bold">
              {'Spinach Artichoke Dip Pasta with Chicken'}
            </h1>
            <div className="flex items-center justify-center font-light text-white pb-32">
              <div className="border-r pr-5 border-solid grid place-items-center gap-2">
                <IoStatsChartOutline className="w-8 h-8" />
                <p>{'Beginner Level'}</p>
              </div>
              <div className="border-r px-5 border-solid grid place-items-center gap-2">
                <FaRegClock className="w-8 h-8" />
                <p>{'40 Mins'}</p>
              </div>
              <div className="border-r px-5 border-solid grid place-items-center gap-2">
                <IoFastFoodOutline className="w-8 h-8" />
                <p>{'9'} Ingredients</p>
              </div>
              <div className="pl-5 grid place-items-center gap-2">
                <FaRegStar className="w-8 h-8" />
                <p className="font-semibold">4.0 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContainerWrapper>
        {/* Nutration facts */}
        <div className="stats shadow my-16 grid place-items-center">
          {Object.entries(nutrations).map(([key, value]) => (
            <div className="stat place-items-center" key={key}>
              <div className="stat-title capitalize">{key}</div>
              <div className="stat-value font-medium text-2xl">{value}</div>
            </div>
          ))}
        </div>

        {/* Ingredients List and step */}
        <div className="grid grid-cols-8 pb-24 gap-5">
          <div className="card shadow-lg p-5 col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc list-inside space-y-2">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 p-2 hover:bg-gray-100 rounded-md"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="card shadow-lg p-5 col-span-6">
            <div className="grid place-items-center">
              <Image
                src={'/reciepe/menu-hero-1.png'}
                alt="recipe"
                width={100}
                height={100}
                className="w-1/3 animate-spin-slow"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Preparation Steps</h3>
            <ol className="list-decimal list-inside space-y-3">
              {preparationSteps.map((step, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 p-2 hover:bg-gray-100 rounded-md"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default SingleRecipe;
