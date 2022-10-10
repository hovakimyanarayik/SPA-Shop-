const selectetProductCard = {
    render(img, title, price, id){
        return `
            <div class="selected-item" >
                <img src="${img}" alt="product">
                <div class="item-info">
                    <p class="title">${title}</p>
                    <p class="price">$ ${price}</p>
                </div>
                <button data-id="${id}"  class="removeBtn"><i class="fa fa-close" data-action="remove"></i> </button>
            </div>
        `
    }
}

export default selectetProductCard;