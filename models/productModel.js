class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
const products = [];
module.exports = { Product, products };