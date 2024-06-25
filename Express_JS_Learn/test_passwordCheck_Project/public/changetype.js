let button = document.getElementById("change");
let inputfiled = document.getElementById("c_type");


button.addEventListener("click", ()=>{
    inputfiled.getAttribute("type") === "password"? inputfiled.setAttribute("type", "text") : inputfiled.setAttribute("type", "password");
});