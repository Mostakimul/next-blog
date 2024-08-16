type nutration = {
  energy: number;
  calories: number;
  sugar: string;
  fat: string;
  carbs: string;
  protein: string;
};

export type RecipeType = {
  id: string;
  title: string;
  description: string;
  rating: number;
  totalReviews: number;
  prepTime: string;
  ingredients: string[];
  preparationSteps: string[];
  totalIngredients: number;
  totalCalories: number;
  recipeImage: string;
  createdBy: string;
  level: string;
  nutrations: nutration;
  createdAt: string;
};
