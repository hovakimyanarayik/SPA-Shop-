import { collection } from "../constants.js";
import productCard from "../components/productCard.js";

const ProductPage = {
    render() {
        const allProducts = collection.map(i => productCard.render(i.img, i.title, i.price, i.id))
        return `
            <div class="product-page">
                <div class="banner products-banner">
                    <h1>Best Quality</h1>
                    <p>COLLECTION 2022</p>
                </div>
                <div class="products">
                    ${allProducts}
                </div>
            </div>
        `
    }
}

export default ProductPage;