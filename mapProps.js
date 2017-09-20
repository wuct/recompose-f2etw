import React from 'react'
import * as Rc from 'recompose'

const enhance =
    Rc.mapProps(({ firstName, secondName }) => ({
        name: firstName + ' ' + secondName
    }))

const Name = ({ name }) => <span>{name}</span>

export default enhance(Name)
