/**
 * Representa um produto no catálogo.
 */
class Product {
    /**
     * @param {number} id - Identificador único do produto.
     * @param {string} name - Nome do produto.
     * @param {string} description - Descrição do produto.
     * @param {number} price - Preço do produto em reais.
     */
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

/**
 * Armazena os produtos em memória.
 * @type {Product[]}
 */
const products = [];

let idCounter = 1;

/**
 * Cria um novo produto e adiciona ao catálogo em memória.
 * @param {string} name
 * @param {string} description
 * @param {number} price
 * @returns {Product}
 */
function createProduct(name, description, price) {
    if (!name || !description || typeof price !== 'number' || Number.isNaN(price)) {
        throw new Error('Dados de produto inválidos');
    }

    const newProduct = new Product(idCounter++, name, description, price);
    products.push(newProduct);
    return newProduct;
}

/**
 * Retorna todos os produtos cadastrados.
 * @returns {Product[]}
 */
function getAllProducts() {
    return products;
}

/**
 * Busca um produto pelo seu ID.
 * @param {number} id
 * @returns {Product | undefined}
 */
function findProductById(id) {
    return products.find(product => product.id === id);
}

/**
 * Atualiza os dados de um produto existente.
 * @param {number} id
 * @param {{name:string, description:string, price:number}} updates
 * @returns {Product | undefined}
 */
function updateProduct(id, updates) {
    const product = findProductById(id);
    if (!product) {
        return undefined;
    }

    product.name = updates.name;
    product.description = updates.description;
    product.price = updates.price;
    return product;
}

/**
 * Remove um produto pelo seu ID.
 * @param {number} id
 * @returns {boolean} True se o produto foi removido.
 */
function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        return false;
    }

    products.splice(index, 1);
    return true;
}

module.exports = {
    Product,
    createProduct,
    getAllProducts,
    findProductById,
    updateProduct,
    deleteProduct
};