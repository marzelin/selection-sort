import { selectionSort } from '../../lib/selection-sort'

describe('selectionSort', function () {
  it('should return an empty array if given an empty array', function () {
    selectionSort([]).should.deep.equal([])
  })
  it('should return a sorted array if given an array of numbers', function () {
    selectionSort([2, 1, 3]).should.deep.equal([1, 2, 3])
  })
})