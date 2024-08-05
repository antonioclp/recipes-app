// Types.
import {TApiOptions, TArea, TUrls} from '../types/index'

const apiUrlMapping = {
  'meal-by-name': 'www.themealdb.com/api/json/v1/1/search.php?s=',
  'meals-by-first-letter': 'www.themealdb.com/api/json/v1/1/search.php?f=',
  'meal-details-by-id': 'www.themealdb.com/api/json/v1/1/lookup.php?i=',
  'meal-random': 'www.themealdb.com/api/json/v1/1/random.php',
  'meal-categories': 'www.themealdb.com/api/json/v1/1/list.php?c=list',
  'meal-areas': 'www.themealdb.com/api/json/v1/1/list.php?a=list',
  'meal-by-category': 'www.themealdb.com/api/json/v1/1/list.php?c=',
  'meal-by-area': 'www.themealdb.com/api/json/v1/1/list.php?a=',
}

export function getApiUrl(option: TApiOptions, queryParam?: TArea): TUrls {
  const baseUrl = apiUrlMapping[option]
  if (
    baseUrl.endsWith('search.php?f=') ||
    baseUrl.endsWith('lookup.php?i=') ||
    baseUrl.endsWith('list.php?c=') ||
    baseUrl.endsWith('list.php?a=')
  ) {
    return `${baseUrl}${queryParam}` as TUrls
  }
  return baseUrl as TUrls
}
