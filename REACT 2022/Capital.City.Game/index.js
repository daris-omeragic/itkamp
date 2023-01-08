
const body = document.querySelector("body")


const div = document.querySelector("#conteiner");
const listItems = document.querySelectorAll("li");
const button = document.querySelector("#button");

let questions = [
    {
        question: "Glavni grad Portugala je:",
        img: "https://a-static.besthdwallpaper.com/portugal-country-flag-wallpaper-2560x1600-106479_7.jpg",
        answers: [
            { text: "Lisabon", correct: true },
            { text: "Skoplje", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "Glavni grad Španije je:",
        img: "http://www.infosepo.com/flags/Spain.jpg",
        answers: [
            { text: "Barselona", correct: false },
            { text: "Madrid", correct: true },
            { text: "Lisabon", correct: false },
        ],
    },
    {
        question: "Glavni grad Francuske je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_France_%281958%E2%80%931976%29.svg",
        answers: [
            { text: "Pariz", correct: true },
            { text: "Lisabon", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "Glavni grad Svajcarske je:",
        img: "https://www.svajcarska.com/wp-content/uploads/2018/04/Flag_of_Switzerland-360x360.png",
        answers: [
            { text: "Rim", correct: false },
            { text: "Berlin", correct: false },
            { text: "Bern", correct: true },
        ],
    },
    {
        question: "Glavni grad Turske je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/330px-Flag_of_Turkey.svg.png",
        answers: [
            { text: "Ankara", correct: true },
            { text: "Istanbul", correct: false },
            { text: "Bursa", correct: false },
        ],
    },
    {
        question: "Glavni grad Srbije je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/359px-Flag_of_Serbia.svg.png",
        answers: [
            { text: "Beograd", correct: true },
            { text: "Zabgreb", correct: false },
            { text: "Skoplje", correct: false },
        ],
    },
    {
        question: "Glavni grad Italije je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/188px-Flag_of_Italy.svg.png",
        answers: [
            { text: "Milano", correct: false },
            { text: "Rim", correct: true },
            { text: "Torino", correct: false },
        ],
        
    },
    {
        question: "Glavni grad Bosne i Hercegovine je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/383px-Flag_of_Bosnia_and_Herzegovina.svg.png",
        answers: [
            { text: "Split", correct: false },
            { text: "Tuzla", correct: false },
            { text: "Sarajevo", correct: true },
        ],
    },
    {
        question: "Glavni grad Japana je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/188px-Flag_of_Japan.svg.png",
        answers: [
            { text: "Kobe", correct: false },
            { text: "Tokio", correct: true },
            { text: "Osaka", correct:false },
        ],
    },
    {
        question: "Glavni grad Maroka je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/188px-Flag_of_Morocco.svg.png",
        answers: [
            { text: "Kairo", correct: false },
            { text: "Akra", correct: false },
            { text: "Rabat", correct: true },
        ],
    },
    {
        question: "Glavni grad Brazila je:",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/188px-Flag_of_Brazil.svg.png",
        answers: [
            { text: "Brazilija", correct: true },
            { text: "Rio de Žaneiro", correct: false },
            { text: "Sao Paulo", correct: false },
        ],
    },
];

let currentQuestion = 0;

const img = document.querySelector("#picture");

button.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion === questions.length) {
        return currentQuestion 
    }
    img.src = questions[currentQuestion].img;
    displayQuestion();
    div.style.backgroundColor = "white";
});

function displayQuestion() {
    const question = questions[currentQuestion];
    document.querySelector("#header").innerHTML = question.question;
    listItems.forEach((li, index) => {
        li.innerHTML = `${question.answers[index].text}<i class="fa-solid"></i>`;
    });
}

displayQuestion();


for (const li of listItems) {
    li.addEventListener("click", () => {
        const selectedAnswer = li.innerHTML.split("<")[0];
        const correct = questions[currentQuestion].answers.find(
            (answer) => answer.text === selectedAnswer
        ).correct;
        div.style.backgroundColor = correct ? "green" : "red";
        li.innerHTML = `${questions.answers[index].text}<i class="fa-solid fa-check"></i>`;
    });
}

resetButton = document.querySelector("#button-reset");

resetButton.addEventListener("click",()=>{
    currentQuestion = 
   
0;
    displayQuestion();
    div.style.backgroundColor = "white";
    img.src = questions[0].img;
    listItems.forEach((li) => {
        li.innerHTML = `${li.innerHTML.split("<")[0]}<i class="fa-solid"></i>`;
    });
});