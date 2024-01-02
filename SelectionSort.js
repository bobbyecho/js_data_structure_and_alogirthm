function SelectionSort(arr) {
  let min

  for(let i = 0; i < arr.length; i++) {
    min = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    } 
    if(i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}

console.log(SelectionSort([4,2,6,5,1,3]))