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
  | `www.themealdb.com/api/json/v1/1/search.php?s=`
  | `www.themealdb.com/api/json/v1/1/search.php?f=`
  | `www.themealdb.com/api/json/v1/1/lookup.php?i=`
  | `www.themealdb.com/api/json/v1/1/random.php`
  | `www.themealdb.com/api/json/v1/1/list.php?c=list`
  | `www.themealdb.com/api/json/v1/1/list.php?a=list`
  | `www.themealdb.com/api/json/v1/1/list.php?c=`
  | `www.themealdb.com/api/json/v1/1/list.php?a=`

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
