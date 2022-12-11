const reviews = [
    {
        id: 1,
        name: "Bill Anderson",
        job: "web developer",
        img: "https://cdn.luxatic.com/wp-content/uploads/2021/01/Business-Casual-for-Men.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "Oliver Smith",
        job: "web designer",
        img: "https://ceoworld.biz/wp-content/uploads/2019/09/Business-Suits-For-Men.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "Henry Smith",
        job: "The boss",
        img: "https://previews.123rf.com/images/olegdudko/olegdudko1507/olegdudko150706008/42205057-businessman-men-business-.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
    },
    {
        id: 4,
        name: "Jack White",
        job: "intern",
        img:"https://menshaircuts.com/wp-content/uploads/2021/11/tp-business-haircut-1.jpg",
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id:5,
        name:"Peter Jones",
        job:"software engineer",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
];



const img = document.querySelector(".picture1");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

const randomButton = document.querySelector(".my-button");




let currentItem = 0 ;


window.addEventListener("DOMContentLoaded",function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    infotextContent = item.text;
});




function person(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener("click",function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    person(currentItem);
});




prevBtn.addEventListener("click",function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length-1
    }
    person(currentItem)
});



randomButton.addEventListener("click",function(){
    console.log("Hello");
    currentItem = Math.floor(Math.random()*reviews.length)
    person(currentItem)
})


