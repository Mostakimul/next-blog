import { recipes } from '@/data/recipes';
import ContainerWrapper from '../ContainerWrapper';
import RecipeCard from '../latest/RecipeCard';

const RelatedRecipes = () => {
  return (
    <ContainerWrapper>
      <div className="space-y-5 pb-24">
        <h1 className="text-3xl font-semibold">Related Recipes:</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recipes.slice(1, 4).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default RelatedRecipes;
