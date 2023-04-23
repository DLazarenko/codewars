// YOUR CODE BELOW
function rotateArray(array, number){
  let newArray = array.slice();
  
  if(number === 0){
    return newArray;
  }
  else if(number < 0){
    for (let i = number; i < 0; i++){
      newArray.push(newArray.shift());
    }
  }
  else if(number > 0){
     for (let k = 0; k < number; k++){
       newArray.unshift(newArray.pop());
       console.log(newArray);
     }
  }
  return newArray;
}

// describe('rotateArray', () => {

//   it('is a function', () => {
//     expect(typeof rotateArray).toEqual('function');
//   });

//   it('returns an array', () => {
//     let returnedValue = rotateArray([1, 2, 3], 0);
//     expect(Array.isArray(returnedValue)).toEqual(true);
//   });

//   it('returns a copy of the array rotated to the right, if rotateNum is positive', () => {
//     let returnedValue = rotateArray(['first', 'second', 'third', 'fourth'], 1);
//     expect(returnedValue).toEqual([ 'fourth', 'first', 'second', 'third' ]);
//   });

//   it('returns a copy of the array rotated to the left, if rotateNum is negative', () => {
//     let returnedValue = rotateArray(['first', 'second', 'third', 'fourth'], -3);
//     expect(returnedValue).toEqual(['fourth', 'first', 'second', 'third']);
//   });

//   it('returns the original array if rotateNum is 0', () => {
//     let returnedValue = rotateArray(['first', 'second', 'third', 'fourth'], 0);
//     expect(returnedValue).toEqual(['first', 'second', 'third', 'fourth']);
//   });

// });
