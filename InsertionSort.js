function InsertionSort(arr) {
  let temp

  for(let i = 1; i < arr.length; i++) {
    temp = arr[i]
    console.log("1", temp)

    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      console.log("2", arr)
      arr[j+1] = arr[j]
      console.log("3", arr)
    }

    arr[j+1] = temp
    console.log("4", arr)
  }
  
  return arr
}

console.log(InsertionSort([4,2,6,5,1,3]))