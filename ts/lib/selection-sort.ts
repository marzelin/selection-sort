import { findMinimum } from './find-minimum'

function selectionSort(array: any[], sortedArray: any[] = []): any[] {
  if (!array.length) { return sortedArray }

  const { value, index } = findMinimum(array)
  const restArray = [...array.slice(0, index), ...array.slice(index + 1)]
  const newSortedArray = [...sortedArray, value]
  return selectionSort(restArray, newSortedArray)
}

export {
  selectionSort as default,
  selectionSort
}