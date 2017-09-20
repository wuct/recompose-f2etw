import React from 'react'
import * as Rc from 'recompose'

const enhance =
  Rc.withStateHandlers({
    count: 0
  }, {
    onClick: ({ count }) => () => ({ count: count + 1 })
  })

const MyComponent = ({ count, onClick }) =>
  <div onClick={onClick}>
    Click {count} {count > 1 ? 'times' : 'time'}.
  </div>

export default enhance(MyComponent)
