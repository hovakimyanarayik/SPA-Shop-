import headerComponent from "./components/header.js";
import footerComponent from "./components/footer.js";
import HomePage from "./screens/Home.js";
import ProductPage from "./screens/Products.js";
import CheckoutPage from "./screens/Checkout.js";
import ErrorPage from "./screens/Error.js";
import { collection } from "./constants.js";

const header = document.querySelector('header');
const root = document.getElementById('root');
const footer = document.querySelector('footer');
let selectedItems = [];


const routes = {
    home: HomePage,
    products: ProductPage,
    checkout: CheckoutPage,
}


function updateCounter() {
    document.getElementById('products-count').innerHTML = selectedItems.length;
}

function updateSelectedItemsInfo() {
    updateCounter();
    root.innerHTML = CheckoutPage.render(selectedItems)
}




function selectingItems() {
    root.addEventListener('click', (e) => {
        let selectedItem;
        if(e.target.dataset.action === 'add') {
            selectedItem = collection.find(i => i.id === +e.target.dataset.id)
            if(selectedItems.includes(selectedItem)) {
                return;
            } else {
                selectedItems.push(selectedItem);
                updateCounter()
            }
        } else if(e.target.dataset.action === 'remove') {
            selectedItems = selectedItems.filter(i => i.id !== +e.path[1].dataset.id);
            updateSelectedItemsInfo();
        } else if(e.target.dataset.action === 'clearAll') {
            selectedItems = [];
            updateSelectedItemsInfo()
        }
    })
}

function init() {
    header.innerHTML = headerComponent.render();
    footer.innerHTML = footerComponent.render();
    location.hash = '#home';
    root.innerHTML = HomePage.render();
    selectingItems();
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('hashchange', () => {
    if(routes[location.hash.slice(1)]){
        root.innerHTML = routes[location.hash.slice(1)].render(selectedItems);
        document.documentElement.scrollTop = 0;
    } else {
        root.innerHTML = ErrorPage.render()
    }
    
})



