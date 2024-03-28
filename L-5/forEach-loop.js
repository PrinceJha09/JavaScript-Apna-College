let arr=["purnia", "patna", "katihar"];

arr.forEach(function printVal(val) {
    console.log(val);
})

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})