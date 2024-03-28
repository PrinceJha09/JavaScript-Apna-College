let arr=[1,2,3,4];
// const sumWithInitial = arr.reduce((acc,currVal) => {
//     return acc + currVal;
// })

// console.log(sumWithInitial);

const largestNumber = arr.reduce((prev, curr) => {
    return prev<curr?curr:prev;
})
  
console.log(largestNumber);