/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(function(res){
    console.log(res)
})
.catch((err)=>{
    console.log("Prikazati error tas")
    console.log(err.message)
}
)
*/





/*

nekiPosao = new Promise((resolve, reject) => {
    const statusCode = 200;
    if (statusCode === 200) {
        resolve({
            statusCode,
            message: "Uspesno izvrsen posao",
            data: [1, 23, 4, 54],
        });
    }
    reject({
        statusCode,
        message: "Greska pri izvrsenju posla",
    });
})


nekiPosao 
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err.message)
});

*/



/*

fetch("https://go-apod.herouapp.com/apod")
.then(function(res){
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})

*/




/*
BASE_URL = "https://restcountries.com/v3.1/name/Aruba";
arr = [];

async function getData() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}
async function getMoreData() {
    const countries = await getData(BASE_URL);

    return countries;
}
const variables = arr.map(function (data) {
    data.forEach((element) => {
        console.log(element);
    });
});

getMoreData().then((data) => {
    data.forEach((c) => {
        console.log(c.name.official);
    });
});
*/






// 1 B 
/*
async function getData() {
    fetch ("https://api.thecatapi.com/v1/breeds")
    .then(function(data){
        console.log(data)
    }
    )
}
async function getMoreData() {
    const cats = await getData("https://cdn2.thecatapi.com/images/0SxW2SQ_S.jpg")
    return cats
}


getMoreData()
*/

/*

async function getData() {
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const data = await response.json()
    return data
}
async function getMoreData() {
    const cats = await getData("https://api.thecatapi.com/v1/breeds")
    return cats
}
getMoreData().then(data => {
    console.log(data)
})



getMoreData().then((data) => {
    data.forEach((c) => {
        console.log(c.name);
    });
});
*/






// C

/*
const arr = [];

async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    return data
}


async function getMoreData() {
    const countries = await getData("https://restcountries.com/v3.1/all")
    return countries
}

const variables = arr.map(function (data) {
    let area = data.sort((a, b) => b - a).slice(0, 1)
    console.log(area)
    let population = data.sort((a, b) => b - a).slice(0, 1)
    console.log(population)
})

getMoreData().then((data) => {
    data.forEach((c) => {
        console.log(c.population);
    });
});
*/





/*


function job() {
    return Promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
        reject("it's not working...")
    });
}



async function job1() {
    console.log('hello world');
}

job()    

*/





















