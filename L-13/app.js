const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const Button = document.querySelector("#getData");

async function getFacts (){
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let fact = await response.json();
    factPara.innerText = fact[0].text; // fact returns an array
} //Using Async-Await

// function getFacts(){
//     console.log("getting data....")
//     fetch(URL).then((response) => {
//          return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[0].text;
//     })
// }  //Using promise Chains.   

Button.addEventListener("click",getFacts);