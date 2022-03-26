
// Класс Product. Содержит минимальную информацию о товаре:
class Product {
    // - свойство id: любое число (идентификатор товара);
    // - свойство price: любое число (цена товара);
    constructor(id,price) {
        this.id = id;
        this.price = price;
    }
    // - метод setPrice(price): устанавливает новую цену и возвращает товар;
    setPrice(price) {
        this.price = price;
        return this;
    }
    // - метод withDiscount(percent): возвращает новый экземпляр товара с дополнительным свойством discountedPrice, в котором рассчитана стоимость товара с учетом указанной скидки.
    withDiscount(percent) {
        this.discountedPrice =  this.price - (this.price / 100 * percent);
       return this;
    }
}


const product = new Product();

// Класс Shop. Содержит товары и функции управления:
class Shop extends Product {
    constructor(){ 
        super()
    }
    // - метод addProducts(products): принимает массив products и добавляет продукты в магазин;
    // addProducts(products) { ????  // }


   // - метод getProduct(id): возвращает продукт по указанному идентификатору.
    getProduct(id) {
    this.products = products.find(e => e.id === id);
    return this
    }
}

 var products = [
    {
      "id":3,
      price:333,
    },
    {
      "id":5,
      "price":2977,
    },
    {
      "id":8,
      "price":117000000,
    }
  ];

const shop = new Shop()
// shop.addProducts(products);???
 console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);