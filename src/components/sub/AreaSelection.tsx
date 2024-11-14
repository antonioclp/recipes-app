// Api.
import {fetchApi} from '@/lib/api'

// Interfaces.
import {IArea, IDefaultResponse} from '@/lib/interfaces'

const AreaSelection = async (): Promise<JSX.Element> => {
  const obj: IDefaultResponse = await fetchApi({
    option: 'meal-areas',
  })

  const {meals} = obj.res as IArea

  return (
    <select>
      {meals.map((c, index) => {
        return <option key={index}>{c.strArea}</option>
      })}
    </select>
  )
}

export default AreaSelection
