import React from 'react'
import * as Rc from 'recompose'

// enhance is a HOC, which is a fucntion accepting
// a component and return a new component with
// display name "MyAwesomeButton".
const enhance = Rc.setDisplayName('MyAwesomeButton')

const MyAwesomeButton = (...props) =>
    <button {...props}>This is awesome!</button>


export default enhance(MyAwesomeButton)
