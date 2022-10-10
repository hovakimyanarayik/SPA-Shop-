import selectetProductCard from "../components/selectedProduct.js"

const CheckoutPage = {
    render(products){
        let allSelectedProducts;
        let amount = 0;
        if(products.length) {
            allSelectedProducts = products.map(prod => selectetProductCard.render(prod.img, prod.title, prod.price, prod.id)).join('');
            amount = products.reduce((acc, itm) => acc += +itm.price, 0)
            return `
                <div class="product-page">
                    <div class="banner checkout-banner">
                        <h1>Sale 10%</h1>
                        <p>COLLECTION 2022</p>
                    </div>
                    <div id="selected-items">
                        ${allSelectedProducts}
                        <button class= 'buyBtn'>Buy: $ ${amount}</button>
                        <button class="clearAll" data-action="clearAll">Clear List</button>
                    </div>
                </div>
            `
        }else {
            return `
                <div class="product-page">
                    <div class="banner checkout-banner">
                        <h1>Sale 10%</h1>
                        <p>COLLECTION 2022</p>
                    </div>
                    <div id="selected-items">
                        <p class="empty">No Selected Items Yet...</p>
                        <a href="#products" class="buy-now-btn"><i class="fa fa-shopping-cart"></i> SHOP NOW</a>
                    </div>
                </div>
            `
        }
        
    }
}

export default CheckoutPage;