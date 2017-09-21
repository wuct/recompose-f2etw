import React from 'react'
import * as Rc from 'recompose'
import { withRouter } from 'react-router'
import { graphql, gql } from 'react-apollo'

export default Rc.compose(
  withRouter,
  Rc.mapProps(({ match: { params = {} }}) => ({
    keyword: params.keyword,
  })),
  graphql(gql`
    ...
  `, {
    options: ({ keyword }) => ({ variables: { keyword }}),
  }),
  Rc.pure
)(({ hotels }) =>
  <div>
    <ul>{hotels.map(/* ... */)}</ul>
  </div>
)
