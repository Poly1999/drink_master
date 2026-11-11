export interface Drink {
  id: number;
  name: string;
  image_url: string;
}

export interface CategoryDrinks {
  category: string;
  drinks: Drink[];
}
