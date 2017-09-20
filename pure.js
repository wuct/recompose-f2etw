import * as Rc from 'recompose'

const enhance = Rc.pure

const MyComponent = () => <div>{/* ... */}</div>

export default enhance(MyComponent)