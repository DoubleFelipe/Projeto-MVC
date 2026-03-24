class Product{
    constructor(id, name, description, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
const products = [];
module.exports = { Product, products };
