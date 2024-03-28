let arr =[1,2,3,4,5];

// let evenArr = arr.filter ((val)=>{
//     return val%2===0;
// })

let evenArr = arr.filter(function evenArr (val){
    return val%2===0;
})