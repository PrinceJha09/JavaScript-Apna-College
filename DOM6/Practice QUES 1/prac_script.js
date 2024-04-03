let h2 = document.getElementById("hello")
console.dir(h2.innerText);

h2.innerText = h2.innerText +" from Apna College Students";

let boxes = document.getElementsByClassName("box");
console.log(boxes);
let idx = 0;
for (div of boxes){
    div.innerText = `new unique value ${idx}`;
    idx++;
} 




