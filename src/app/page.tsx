import {fetchApi} from '@/lib/api'

/**
 * Development branch @version 0.1.0
 * Development api consuming branch @version 0.1.1-a
 * Home page component that renders the recipes and other features.
 * @returns {JSX.Element}
 */
export default async function Home(): Promise<JSX.Element> {
  const obj = await fetchApi({
    option: 'meal-by-category',
    categoryParams: 'Beef',
  })
  console.log(obj.res)
  return (
    <main>
      <span>Home</span>
    </main>
  )
}
