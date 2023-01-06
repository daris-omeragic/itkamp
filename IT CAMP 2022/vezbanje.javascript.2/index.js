/*
str= "aaabreauioedssdsad"

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}
console.log(getCount(str))

*/






/*
arr = [1,2,3,4,5,6,7,8,9,14];
function myCallBeck(el){
    console.log("myCallBeck",el)
}

function customForEach(arr,clb){
    for (let i = 0; i < arr.length; i++) {
        clb(arr[i])
    }
}
arr.forEach(myCallBeck);

customForEach(arr,myCallBeck);
*/


/*
function glavniPosao (clb){
    fetchArr = [];
    console.log("pocetak glavnog posla");
    for (let i = 0; i < 900000000; i++) {
        if (i % 100000000 === 0){
            fetchArr.push(i);
        }
    }
    console.log("kraj glavnog posla");
    clb(fetchArr)
}




function radSaNizom(arg){
    for (let i = 0; i < arg.length; i++) {
        console.log(arg[i]+10)
    }
}



function doubleArrEl (myArr){
    for (let i = 0; i < myArr.length; i++) {
        console.log(myArr[i]*2)
    }
}




glavniPosao(radSaNizom);
glavniPosao(doubleArrEl);



*/



/*

array = [23,654,763,35,3,75,76];


array2 = array.map((el)=>{
    if (el >20){
        return el
    }
});


array2 = array.map((el)=> el *3)


console.log(array);

console.log(array2)

*/




/*

class  Covek {
    constructor (ime,prezime,godiste,rod){
        (this.ime = ime),
        (this.prezime = prezime),
        (this.godiste = godiste),
        (this.rod = rod)
    }
}


const covek1 = new Covek ("Zerin","Mujezinovic",2003,"M")
const covek2 = new Covek ("Dzejlana","Radoncic",2003,"Z")
const covek3 = new Covek ("Muhamed","Gusinac",2005,"M")
const covek4 = new Covek ("Daris","Omeragic",2006,"M")
const covek5 = new Covek ("Merisa","Besirovic",2003,"Z")

*/


const array = [covek1,covek2,covek3,covek4,covek5];


/*
const arrayM = [];
const arrayZ = [];

for (i = 0 ; i < array.length ; i++){
    if (array[i].godiste < 2004){
        console.log(array[i])
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i].rod === "M"){
        arrayM.push(array[i])
    } else{
        arrayZ.push(array[i])
    }
}
console.log(arrayM)
console.log(arrayZ)
*/

/*
let Nums = [1,2,3,4,5,6];



map1 = Nums.map(x => (x.toString()))


console.log(map1)
*/







