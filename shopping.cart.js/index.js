//          SHOPPING CART


class product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.amount = 0;
	}
	writeOut() {
		return (` ${this.name} , ${this.price} $`)
	}
}




class shoppingCart {
	constructor() {
		this.products = [];
		this.totalPrice = 0;
		this.noDiscountPrice = 0
		this.discount = 0;
	}



	addProduct(product) {
		this.totalPrice += product.price;
		this.noDiscountPrice = this.totalPrice;
		console.log(this.totalPrice);
		const check = { isExist: false, indx: undefined };
		this.products.forEach((p, i) => {
			if (p.name === product.name) {
				check.isExist = true;
				check.indx = i;
			}
		});
		if (check.isExist) {
			this.products[check.indx].amount += 1
		} else {
			product.amount = 1;
			this.products.push(product)
		}
	}
	productNumber() {
		if (this.products.length >= 5) {
			let productDiscount = this.totalPrice - (this.totalPrice / 10)
			console.log(`Uzeli ste vise od 5 prizvoda i cena sa popustom od 10 % iznosi $ ${productDiscount} `)
			this.totalPrice = productDiscount
		}
		return this.totalPrice;
	}
}








let cart = new shoppingCart();
product1 = new product("pencil", 345)
product2 = new product("pen", 203)
product3 = new product("backpack", 445);
product4 = new product("TV", 150)
//product5 = new product ("notebook", 45)
//product6 = new product ("book",23)


let p2_replace = new product("accessories", 100)
product2 = p2_replace
cart.addProduct(p2_replace)


//cart.addProduct(product1);
//let p1_replace = new product ("ruler", 50)
//product1 = p1_replace
//cart.addProduct(p1_replace)
//cart.addProduct(product1);
cart.addProduct(product1);
cart.addProduct(product2);


//cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);
//cart.addProduct(product5);
//cart.addProduct(product6);

cart.productNumber();
console.log(cart);

