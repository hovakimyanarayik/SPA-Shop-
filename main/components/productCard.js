const productCard = {
    render(img, title, price, id) {
        return `
            <div class="product">
                <img src="${img}" alt="jeans">
                <p class="title">${title}</p>
                <p class="price">$ ${price}</p>
                <button data-action="add" data-id="${id}">Buy Now <i class="fa fa-shopping-cart"></i></button>
            </div>
        `
    }
}

export default productCard;