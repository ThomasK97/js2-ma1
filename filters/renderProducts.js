
export function renderProducts(productsToRender){
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML ="";

    productsToRender.forEach(function (product) {
        productsContainer.innerHTML += `<div class="product"

       


                                            <h4>${product.title}</h4>
                    
                                            <p>Price: ${product.price} $</p>
                                        </div>`
        
    });
}