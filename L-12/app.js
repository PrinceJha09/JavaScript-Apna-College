// function getData (dataId, getNextData) {
//     setTimeout( ()=> {
//         console.log("data ", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },1000 )
// }
//  //CALLBACK HELL
// getData(1, ()=>{
//     console.log("getting data 2.....");
//     getData(2, ()=>{
//         console.log("getting data 3.....");
//         getData(3, ()=>{
//             console.log("getting data 4.....");
//             getData(4);
//         })
//     });
// });


//Promises : 

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("some error occured");
// })

// function getData (dataId, getNextData) {
//     return new Promise((resolve,reject) => {
//         setTimeout( ()=> {
//             console.log("data ", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000 )
//     })
//     }

//.then and .catch :

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("some error occured");
//     });
// };

// let promise = getPromise();
// promise.then((res)=> {
//     console.log("promise fulfilled" , res);
// });

// promise.catch((err) => {
//     console.log("rejected" , err);
// })

//Promise chain :

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching data 1......");
// asyncFunc1().then((res)=>{
//     console.log("fetching data 2......");
//     asyncFunc2().then((res) => {});
// })

//PROMISE CHAIN 2 : 

// function getData (dataId) {
//     return new Promise ((resolve,reject) => {
//     setTimeout( ()=> {
//         console.log("data ", dataId);
//         resolve("success");
//     },3000 );
// });
// }

// getData(1)
//   .then((res) => {
//     return getData(2);       //returning next callback as next promise
//   })
//   .then((res)=> {
//     return getData(3);
//   })
//   .then((res)=>{
//     console.log(res);
//   });

//ASYNC-AWAIT : 

// function api(){
//     return new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("weather Data");
//             resolve(200);
//         },3000)
//     })
// }

// async function getWeatherData() {
//     await api(); //1st call
//     await api(); //2nd call
// }

//Async Await 2:

function getData (dataId) {
    return new Promise ((resolve,reject) => {
        setTimeout( ()=> {
            console.log("data ", dataId);
            resolve("success");
        },3000 );
    });
}

(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
})();  //IIFE  (func)();