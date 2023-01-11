
const page = document.querySelector(".page")



const input = document.querySelector("#header")


const button = document.querySelector("#button-add");


const ButtonBackgroundColor = document.querySelector("#background-color");



button.addEventListener("click", () => {
    const header = document.createElement("h1"); // Kreiramo novi h1 element
    header.innerHTML = input.value;
    input.value = "";
    document.body.appendChild(header);
})


ButtonBackgroundColor.addEventListener("click",()=>{
    page.style.backgroundColor = "green";
})