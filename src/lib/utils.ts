import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DEFAULT_INGREDIENTS = [
  "Salt",
  "Pepper",
  "Olive oil",
  "Garlic",
  "Onions",
  "Butter",
  "Eggs",
  "Flour",
  "Sugar",
  "Milk",
  "Tomatoes",
  "Rice",
  "Chicken",
  "Potatoes",
  "Pasta",
  "Cheese",
  "Vinegar",
  "Lemon",
  "Soy sauce",
  "Herbs",
];

export const DEFAULT_DIET_PREFERENCE = [
  "None",
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Flexitarian",
  "Paleo",
  "Keto",
  "Gluten-free",
  "Dairy-free",
  "Low-carb",
  "Mediterranean",
];
