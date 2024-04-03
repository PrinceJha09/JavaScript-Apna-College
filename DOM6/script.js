//log and dir

// console.log(window.document);
// console.dir(document.body);
// console.log(document.body);

// document.body.childNodes[1].innerText ="Hiiiii"; //text change


//SELECTING 
// let parag = document.getElementById("para");
// console.log(parag);
// console.dir(parag);


// let greetings = document.getElementsByClassName("greet");
// console.log(greetings);
// console.dir(greetings);

// let paras = document.getElementsByTagName("p");
// console.dir(paras); 

//ATTRIBUTES
// let parag = document.getElementById("para");
// let ID = parag.getAttribute("id");
// console.log(ID);
// parag.setAttribute("class","hello"); 

//STTYLE
let h1 = document.getElementById("head");
h1.style.backgroundColor = "dodgerblue";

//INSERT 
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
h1.after(newBtn);

let newHead = document.createElement("h1");
newHead.innerHTML = "<i> Hi, I am new Heading </i>";
document.querySelector("body").prepend(newHead);