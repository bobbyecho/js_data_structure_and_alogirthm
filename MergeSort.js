const { merge } = require('./Merge')

function mergeSort(array) {
  if (array.length === 1) {
    console.log("array", array)
    return array
  }

  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid)
  console.log("left", left)
  let right = array.slice(mid)
  console.log("right", right)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([4,2,6,5,1,3,10,7,8, 11, 13, 12]))