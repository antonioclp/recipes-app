// Types.
import {TApiOptions, TArea, TCategory, TUrls} from '../types/index'

const apiUrlMapping = {
  'meal-by-name': 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  'meals-by-first-letter':
    'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  'meal-details-by-id': 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
  'meal-random': 'https://www.themealdb.com/api/json/v1/1/random.php',
  'meal-categories': 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  'meal-areas': 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
  'meal-by-category': 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  'meal-by-area': 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
}

export function getApiUrl(
  option: TApiOptions,
  queryParam?: TArea | TCategory,
): TUrls {
  const baseUrl = apiUrlMapping[option]
  if (
    baseUrl.endsWith('search.php?f=') ||
    baseUrl.endsWith('lookup.php?i=') ||
    baseUrl.endsWith('filter.php?c=') ||
    baseUrl.endsWith('filter.php?a=')
  ) {
    return `${baseUrl}${queryParam}` as TUrls
  }
  return baseUrl as TUrls
}
