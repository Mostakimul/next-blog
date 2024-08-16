import { recipes } from '@/data/recipes';
import { PiCaretCircleRightThin } from 'react-icons/pi';
import Button from '../button/Button';
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
              <Button
                href="/"
                text="View Recipes"
                icon={<PiCaretCircleRightThin className="text-xl" />}
              />
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
