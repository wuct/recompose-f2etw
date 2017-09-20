import R from 'ramda' // Lodash implementation is equivalent.

const addThreeNumbers = (x, y, z) => x + y + z
const curriedAddThreeNumbers = R.curry(addThreeNumbers)

curriedAddThreeNumbers(1, 2, 3)
curriedAddThreeNumbers(1, 2)(3)
curriedAddThreeNumbers(1)(2, 3)
curriedAddThreeNumbers(1)(2)(3)