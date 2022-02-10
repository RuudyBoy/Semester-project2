import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";

const url ="http://localhost:8085/products/";

async function getProducts() {
	try {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);

       

        renderProducts(products);
        searchProducts(products);

        
    } catch (error) {
        console.log(error);
    } 
} 

getProducts();