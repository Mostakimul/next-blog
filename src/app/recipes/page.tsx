import ContainerWrapper from '@/components/ContainerWrapper';
import RecipeCard from '@/components/latest/RecipeCard';
import PageHero from '@/components/pageHero/PageHero';
import Quote from '@/components/quote/Quote';
import { recipes } from '@/data/recipes';

const Recipes = () => {
  return (
    <>
      <PageHero
        image="/pages/recipes-bg.jpg"
        title="Recipes"
        description="Discover a world of culinary inspiration with our diverse
              collection of recipes. Whether you're a seasoned chef or a home
              cook, our carefully curated selections wil l help you create
              memorable meals and explore new flavors with ease."
      />
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
      <Quote
        text='"To get the best results, you must talk to your Vegetables."'
        author="Charles, Prince of Wales"
      />
    </>
  );
};

export default Recipes;
