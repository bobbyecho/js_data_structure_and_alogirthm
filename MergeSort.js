function merge(array1, array2) {
  let combined = []
  let i = 0
  let j = 0

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i])
      i++
    } else {
      combined.push(array2[j])
      j++
    }
  }

  while (i < array1.length) {
    combined.push(array1[i])
    i++
  }

  while(j < array2.length) {
    combined.push(array2[j])
    j++
  }

  return combined
}

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