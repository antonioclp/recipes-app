// Utils.
import {getApiUrl} from '../utils'

// Interfaces.
import {
  ICategory,
  IDefaultResponse,
  IFetchObject,
  IMeal,
  IMealByCategory,
} from '../interfaces'

export const fetchApi = async (
  object: IFetchObject,
): Promise<IDefaultResponse> => {
  let status = 0
  const {option, areaParams, categoryParams, idParams} = object

  await new Promise((resolve) => setTimeout(resolve, 3000))

  try {
    if (option === 'meal-categories') {
      const url = getApiUrl(option)

      const response = await fetch(url, {
        cache: 'no-cache',
      })

      if (!response.ok) {
        status = response.status
        throw new Error('ocurred a internal error.')
      }

      status = response.status
      const data: ICategory = await response.json()

      return {
        message: 'sucessfully fetched.',
        status,
        res: data,
      }
    }

    if (option === 'meal-areas') {
      const url = getApiUrl(option)

      const response = await fetch(url, {
        cache: 'no-cache',
      })

      if (!response.ok) {
        status = response.status
        throw new Error('ocurred a internal error.')
      }

      status = response.status
      const data = await response.json()

      return {
        message: 'sucessfully fetched.',
        status,
        res: data,
      }
    }

    if (option === 'meal-random') {
      const url = getApiUrl(option)

      const response = await fetch(url, {
        cache: 'no-cache',
      })

      if (!response.ok) {
        status = response.status
        throw new Error('ocurred a internal error.')
      }

      status = response.status
      const data: IMeal = await response.json()

      return {
        message: 'sucessfully fetched.',
        status,
        res: data,
      }
    }

    if (option === 'meal-by-category' && categoryParams) {
      const url = getApiUrl(option, categoryParams)

      const response = await fetch(url, {
        cache: 'no-cache',
      })

      if (!response.ok) {
        status = response.status
        throw new Error('ocurred a internal error.')
      }

      status = response.status
      const data: IMealByCategory = await response.json()

      return {
        message: 'sucessfully fetched.',
        status,
        res: data,
      }
    }

    if (option === 'meal-by-area' && areaParams) {
      const url = getApiUrl(option, areaParams)

      const response = await fetch(url, {
        cache: 'no-cache',
      })

      if (!response.ok) {
        status = response.status
        throw new Error('ocurred a internal error.')
      }

      status = response.status
      const data: IMeal[] = await response.json()

      return {
        message: 'sucessfully fetched.',
        status,
        res: data,
      }
    }

    if (option === 'meal-details-by-id' && idParams) {
      const url = getApiUrl(option, idParams)

      const response = await fetch(url, {
        cache: 'no-cache',
      })

      if (!response.ok) {
        status = response.status
        throw new Error('ocurred a internal error.')
      }

      status = response.status
      const data: IMeal = await response.json()

      return {
        message: 'sucessfully fetched.',
        status,
        res: data,
      }
    }

    status = 505

    return {
      message: 'provide a valid option.',
      status,
      res: null,
    }
  } catch (err) {
    return {
      message: err as string,
      status,
      res: null,
    }
  }
}
