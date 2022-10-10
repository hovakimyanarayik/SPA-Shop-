import productCard from "../components/productCard.js";
import { collection } from "../constants.js";

const HomePage = {
    render() {
        const homePageCollection = collection.slice(0, 3).map(i => productCard.render(i.img, i.title, i.price, i.id)).join('');
        return `
            <div class="product-page">
                <div class="banner home-banner">
                    <h1>New arrivals</h1>
                    <p>COLLECTION 2022</p>
                    <a href="#products" class="buy-now-btn"><i class="fa fa-shopping-cart"></i> SHOP NOW</a>
                </div>
                <div class="products">
                    ${homePageCollection}
                </div>
            </div>
        `
    }
}

export default HomePage;