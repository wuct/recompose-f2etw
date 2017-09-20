import React from 'react'
import * as Rc from 'recompose'

const enhance = Rc.compose(
  Rc.withState('count', 'setCount', 0),
  Rc.withHandlers({
    onClick: ({ count, setCount }) => () => setCount(count + 1)
  })
)

const MyComponent = ({ count, onClick }) =>
  <div onClick={onClick}>
    Click {count} {count > 1 ? 'times' : 'time'}.
  </div>

export default enhance(MyComponent)
