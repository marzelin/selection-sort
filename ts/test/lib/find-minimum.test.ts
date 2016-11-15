import { findMinimum } from '../../lib/find-minimum'
import { expect } from 'chai'

describe('findMinimum', function () {
  it('should return undefined if given empty array', function () {
    expect(findMinimum([])).to.be.undefined
  })
  it('should return {value, index} of the smallest number ' +
     'in an array of numbers', function () {
       findMinimum([2, 1, 3]).should.deep.equal({value: 1, index: 1})
     })
})