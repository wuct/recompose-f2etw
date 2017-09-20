import React from 'react'
import { withState, mapProps, pure, compose } from 'recompose'
import { graphql, gql } from 'react-apollo'

export default Rc.compose(
  Rc.withStateHandlers({
    keyword: ''
  }, {
    onChange: () => e => ({ keyword: e.target.value }),
  }),
  graphql(gql`
    query HotelSearchQuery($keyword: String!) {
      hotels(keyword: $keyword) {
        ...
      }
   }`, {
    options: ({ keyword }) => ({ variables: { keyword }}),
  }),
  mapProps(({ data, ...otherProps }) => ({
    ...otherProps,
    ...data,
  })),
  Rc.pure,
)(({ keyword, onChange, hotels }) =>
  <div>
    <input value={keyword} onChange={onChange} />
    <ul>{hotels.map(/* ... */)}</ul>
  </div>
)
