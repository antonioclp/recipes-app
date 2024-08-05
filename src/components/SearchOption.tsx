import Link from 'next/link'

// Api.
import {fetchApi} from '@/lib/api'

// Interfaces.
import {ICategory, IDefaultResponse} from '@/lib/interfaces'

const SearchOption = async (): Promise<JSX.Element> => {
  const obj: IDefaultResponse = await fetchApi({option: 'meal-categories'})
  const {meals} = obj.res as ICategory

  return (
    <section>
      <input />
      {meals.map((c, index) => {
        return (
          <Link key={index} href={`/category/${c.strCategory.toLowerCase()}`}>
            {c.strCategory}
          </Link>
        )
      })}
    </section>
  )
}

export default SearchOption
