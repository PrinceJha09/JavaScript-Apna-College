let btn = document.querySelector("#btn");
btn.onclick = (evt) => {
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.clientX);
}

let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("You are in div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }

div.addEventListener("mouseover", (evt) => {
    console.log("You are in div handler1");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);}
    )
const handler2 = () => {
    console.log("You are in div handler2");
};

div.addEventListener("mouseover", handler2);

div.addEventListener("mouseover", () => {
    console.log("You are in div handler3");
})

div.removeEventListener("mouseover", handler2);