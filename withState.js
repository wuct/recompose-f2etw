import React from 'react'
import * as Rc from 'recompose'

const enhance = Rc.withState('count', 'setCount', 0)

const MyComponent = ({ count, setCount }) =>
  <div onClick={() => setCount(count + 1)}>
    Click {count} {count > 1 ? 'times' : 'time'}.
  </div>

export default enhance(MyComponent)
