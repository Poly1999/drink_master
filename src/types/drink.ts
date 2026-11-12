export interface Drink {
  id: number;
  name: string;
  image_url: string;
}

export interface CategoryDrinks {
  category: string;
  drinks: Drink[];
}

export interface CocktailsIngredients {
  id: number;
  title: string;
  image_url: string | null;
  measure: string | null;
}

export interface Cocktails {
  id: number;
  name: string;
  alcoholic: string;
  image_url: string | null;
  short_description: string | null;
  instructions: string | null;
  glass: string;
  ingredients: CocktailsIngredients[];
}
