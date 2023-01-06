
// MENU 

// SREDITIII

const menu = [
  {
    id: 1,
    tittle: "Buttermilk Pancakes",
    category: " breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 2,
    tittle: "Diner Double",
    category: " breakfast",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
  },
  {
    id: 3,
    tiitle: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut."
  },
  {
    id: 4,
    tiitle: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
  },
  {
    id: 5,
    tiitle: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  },
  {
    id: 6,
    tiitle: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
  },
  {
    id: 7,
    tiitle: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
  },
  {
    id: 8,
    tiitle: "Bacon Overflow",
    category: "diner",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
  },
  {
    id: 9,
    tiitle: "Pizza Magic",
    category: "diner",
    price: 7.99,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/800px-Supreme_pizza.jpg",
    description: "Pizza Magic has created mouth-watering magical flavours of Pizzas,Pizza magic is your own local outlet. We at Pizza Magic take pride in providing excellent service & delicious food at an affordable price. Pizza magic started in Stratford and we are thankful for the love and support you have provided us over the time period."
  },
  {
    id: 10,
    tiitle: "Chicken in sauce",
    category: "lunch",
    price: 10.99,
    img: "https://canzona.net/images/glavna-jela/piletina/Canzona_040418_037.jpg",
    description: "Chicken in mushroom sauce. A delicious combination. Side dishes include potatoes and salad"

  }
]

const MenuConteiner = document.querySelector(".menu-conteiner");

const ButtonConteiner = document.querySelector(".button-conteiner");


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-conteiner-item">
            <img src=${item.img} class="picture" alt=${item.title} />
            <div class="conteiner-info">
                <h6>${item-header}</h6>
                <h4 class="price">$${item.price}</h4>
              <p class="text">
                ${item.text}
              </p>
            </div>
          </div> `;
  });
  displayMenu = displayMenu.join("");

  MenuConteiner.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="button" type="button" data-id=${category}>
        ${category}
        </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
console.log(tiitle)


displayMenuButtons()
displayMenuItems(menuItems)