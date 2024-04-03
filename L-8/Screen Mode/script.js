let btn = document.querySelector("#mode");
let currMode = "light";

btn.addEventListener("click", ()=> {
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("div").classList.add("dark");
        document.querySelector("p").classList.add("dark");
        btn.innerHTML = "Light Mode";
    }
    else {
        currMode = "light";
        document.querySelector("body").classList.remove("dark");
        document.querySelector("div").classList.remove("dark");
        document.querySelector("p").classList.remove("dark");
        btn.innerHTML = "Dark Mode";
    }
});
