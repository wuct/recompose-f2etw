import React from 'react'
import * as Rc from 'recompose'
import { connect } from 'react-redux'
import { submitAddress } from './actions'

export default Rc.compose(
  connect(
    ({ address }) => ({ address }),
    { submitAddress },
  ),
  Rc.withStateHandlers(
    ({ address }) => ({ address }),
    {
      onChange: () => e => ({ address: e.target.value }),
      onSubmit: ({ address }, { submitAddress }) => e => {
          e.preventDefault()
          submitAddress(address)
      }
    }
  ),
  Rc.pure
)(({ address, onChange, onSubmit }) =>
  <form onSubmit={onSubmit}>
    <input value={address} onChange={onChange} />
    <button>Submit</button>
  </form>
)
