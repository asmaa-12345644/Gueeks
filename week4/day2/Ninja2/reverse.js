function reverseArray(array) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  
      i++;
      j--;
    }
  
    return array; 
  }
  

  console.log(reverseArray([1, 2, 3, 4, 5]));        
  console.log(reverseArray([1, 2]));               
  console.log(reverseArray([]));                
  console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])); 