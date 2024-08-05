import React from 'react'

// Sub-components.
import CategoryLink from './sub/CategoryLink'
import AreaSelection from './sub/AreaSelection'

const SearchOption = async (): Promise<JSX.Element> => {
  return (
    <React.Fragment>
      <CategoryLink />
      <AreaSelection />
    </React.Fragment>
  )
}

export default SearchOption
