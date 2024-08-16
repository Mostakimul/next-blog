import ContainerWrapper from '../ContainerWrapper';
import BestWeekSlider from './BestWeekSlider';

const BestWeekRecipe = () => {
  return (
    <ContainerWrapper>
      <div className="w-full md:w-4/6 lg:w-5/6 mx-auto my-24">
        <h3 className="text-4xl mb-5 text-gray-400">Recipes Of The Week</h3>
        <div>
          <BestWeekSlider />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default BestWeekRecipe;
