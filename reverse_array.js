function reverse(array){
  let reverseArray = []
    while(array.length > 0){
      reverseArray.push(array.pop());
    }
    array = reverseArray;
    return array;
}
let array = [1,2,3,4];
array = reverse(array);
console.log(array);
