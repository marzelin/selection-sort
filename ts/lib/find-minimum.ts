function findMinimum(array: any[]) {
  if(!array.length) { return }

  return array.reduce(
    (min: {value: any, index: number}, current: any, index: number) =>
      current < min.value ? {value: current, index} : min,
    {value: array[0], index: 0}
  )
}

export {
  findMinimum,
  findMinimum as default
}