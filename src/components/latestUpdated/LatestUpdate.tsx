import { blogs } from '@/data/blogs';
import Image from 'next/image';
import ContainerWrapper from '../ContainerWrapper';
import Button from '../button/Button';

const LatestUpdate = () => {
  return (
    <ContainerWrapper>
      <div className="text-center space-y-5 mb-24">
        <h2 className="text-4xl md:text-6xl">Our Latest Blogs</h2>
        <p className="w-full md:w-3/5 mx-auto">
          Discover a world of culinary inspiration with our recipe blog, where
          every dish tells a story. Explore mouthwatering recipes, cooking tips,
          and creative ideas to elevate your kitchen game!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="card bg-base-100 w-full shadow-xl">
              <figure>
                <Image
                  src={blog.coverImage}
                  alt="recipe"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.description.slice(0, 50)}...</p>
                <div className="card-actions justify-end">
                  <Button href="/" text="Learn More" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default LatestUpdate;
