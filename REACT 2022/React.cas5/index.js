
const page = document.querySelector(".page")



const input = document.querySelector("#header")

const inputText = document.querySelector("#paragraph")

const button = document.querySelector("#button-add");


const ButtonBackgroundColor = document.querySelector("#background-color");

const ButtonText = document.querySelector("#button-text")

button.addEventListener("click", () => {
    const header = document.createElement("h1"); // Kreiramo novi h1 element
    header.innerHTML = input.value;
    input.value = "";
    page.appendChild(header);
})




ButtonText.addEventListener("click", () => {
    const parapgraph = document.createElement("p");
    parapgraph.innerHTML = inputText.value;
    inputText.value = "";
    page.appendChild(parapgraph);
});


const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const aqua = document.querySelector("#aqua");
const pink = document.querySelector("#pink");






green.addEventListener("click", () => {
    page.style.background = "green"
})


blue.addEventListener("click", () => {
    page.style.background = "blue"
})

pink.addEventListener("click", () => {
    page.style.background = "pink"
})


aqua.addEventListener("click", () => {
    page.style.background = "aqua"
})

red.addEventListener("click", () => {
    page.style.background = "red"
})
