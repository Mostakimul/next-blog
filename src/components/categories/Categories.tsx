import ContainerWrapper from '../ContainerWrapper';
import CategoriesSlider from './CategoriesSlider';

const Categories = () => {
  return (
    <ContainerWrapper>
      <section>
        <h3 className="text-center mb-10 text-4xl lg:text-6xl">
          Browse By Category
        </h3>
        <div>
          <CategoriesSlider />
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default Categories;
