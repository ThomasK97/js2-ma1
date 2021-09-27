import { renderProducts } from '../filters/renderProducts.js';
import { searchProducts } from '../filters/searchProducts.js';
import { url } from './constants.js';



async function getProducts() {
    try {
        const response = await fetch(url);
        const allProducts= await response.json();

        console.log(allProducts);

        renderProducts(allProducts);
        searchProducts(allProducts);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".products-container");
    }
}

getProducts();














