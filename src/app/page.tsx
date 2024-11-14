import {Suspense} from 'react'

// Components.
import {SearchOption} from '@/components'

/**
 * Development branch @version 0.1.0
 * Front-End development branch @version 0.1.1-f
 * Home page component that renders the recipes and other features.
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <main>
      <span>Home</span>
      <Suspense fallback={<span>Loading...</span>}>
        <SearchOption />
      </Suspense>
    </main>
  )
}
