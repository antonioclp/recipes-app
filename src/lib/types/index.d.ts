export type TApiOptions =
  | 'meal-by-name'
  | 'meals-by-first-letter'
  | 'meal-details-by-id'
  | 'meal-random'
  | 'meal-categories'
  | 'meal-areas'
  | 'meal-by-category'
  | 'meal-by-area'

export type TUrls =
  | `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  | `https://www.themealdb.com/api/json/v1/1/search.php?f=`
  | `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
  | `https://www.themealdb.com/api/json/v1/1/random.php`
  | `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
  | `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  | `https://www.themealdb.com/api/json/v1/1/list.php?c=`
  | `https://www.themealdb.com/api/json/v1/1/list.php?a=`

export type TArea =
  | 'American'
  | 'British'
  | 'Canadian'
  | 'Chinese'
  | 'Croatian'
  | 'Dutch'
  | 'Egyptian'
  | 'Filipino'
  | 'French'
  | 'Greek'
  | 'Indian'
  | 'Irish'
  | 'Italian'
  | 'Jamaican'
  | 'Japanese'
  | 'Kenyan'
  | 'Malaysian'
  | 'Mexican'
  | 'Moroccan'
  | 'Polish'
  | 'Portuguese'
  | 'Russian'
  | 'Spanish'
  | 'Thai'
  | 'Tunisian'
  | 'Turkish'
  | 'Ukrainian'
  | 'Unknown'
  | 'Vietnamese'

export type TCategory =
  | 'Beef'
  | 'Breakfast'
  | 'Chicken'
  | 'Dessert'
  | 'Goat'
  | 'Lamb'
  | 'Miscellaneous'
  | 'Pasta'
  | 'Pork'
  | 'Seafood'
  | 'Side'
  | 'Starter'
  | 'Vegan'
  | 'Vegetarian'
