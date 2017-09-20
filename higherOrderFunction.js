// map() and filter() are HOFs
const map = fun => array => array.map(fun)
const filter = fun => array => array.filter(fun)

const increaseAll = map(x => x + 1)
const takeEven = filter(x => x % 2 === 0)

const increaseAllAndTakeEven = compose(
  takeEven,
  increaseAll
)

  increaseAllAndTakeEven([1, 2, 3, 4, 5])
  // [2, 4, 6]