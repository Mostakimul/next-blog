import ContainerWrapper from '@/components/ContainerWrapper';
import RecipeCard from '@/components/latest/RecipeCard';
import { recipes } from '@/data/recipes';

const Recipes = () => {
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
            <h1 className="mb-5 text-5xl font-bold">Recipes</h1>
            <p className="mb-5">
              Discover a world of culinary inspiration with our diverse
              collection of recipes. Whether you're a seasoned chef or a home
              cook, our carefully curated selections will help you create
              memorable meals and explore new flavors with ease.
            </p>
          </div>
        </div>
      </div>
      <ContainerWrapper>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-24 pb-12">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="grid place-items-center pb-24">
            <div className="join grid grid-cols-2 w-1/5">
              <button className="join-item btn btn-outline">Previous</button>
              <button className="join-item btn btn-outline">Next</button>
            </div>
          </div>
        </section>
      </ContainerWrapper>
      <section
        className="hero"
        style={{
          backgroundImage: "url('/pages/recipe-bg-2.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-max pt-32 pb-10 space-y-5">
            <h3 className="text-4xl">
              To get the best results, you must talk to your Vegetables.
            </h3>
            <p>- Charles, Prince of Wales</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;
