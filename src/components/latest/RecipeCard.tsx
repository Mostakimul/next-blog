import { RecipeType } from '@/types/recipe';
import Image from 'next/image';
import {
  PiCalendarDotsLight,
  PiCaretCircleRightThin,
  PiStarThin,
} from 'react-icons/pi';
import Button from '../button/Button';

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
  const { recipeImage, title, createdBy, createdAt, rating } = recipe;
  return (
    <div className="card glass w-full">
      <figure>
        <Image
          src={recipeImage}
          alt="recipe"
          width={100}
          height={100}
          className="w-72 hover:animate-spin-slow"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <p className="text-sm font-light text-gray-400">By {createdBy}</p>
          <div className="badge badge-info gap-2">
            <PiStarThin className="font-bold" /> {rating}
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="flex gap-3 items-center font-light">
          <PiCalendarDotsLight /> {createdAt}
        </p>
        <div className="card-actions justify-end">
          <Button
            href="/"
            text="View Recipe"
            icon={<PiCaretCircleRightThin className="text-xl" />}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
