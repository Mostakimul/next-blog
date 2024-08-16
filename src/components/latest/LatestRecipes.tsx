import { recipes } from '@/data/recipes';
import Link from 'next/link';
import { PiCaretCircleRightThin } from 'react-icons/pi';
import RecipeCard from './RecipeCard';

const LatestRecipes = () => {
  return (
    <section className="my-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div
          className="row-span-2 grid place-content-center text-center py-10 md:py-0"
          style={{
            backgroundImage: "url('/side-bg.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="backdrop-blur-sm h-full w-full py-10">
            <h3 className="font-semibold text-white text-center text-4xl md:text-6xl">
              Latest Recipes
            </h3>
            <div className="mt-10 mb-10 sm:mb-0">
              <Link
                href={'/'}
                className="btn px-10 rounded-full bg-white shadow-md"
              >
                View Recipes <PiCaretCircleRightThin className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default LatestRecipes;
