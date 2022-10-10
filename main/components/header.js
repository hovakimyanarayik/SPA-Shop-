const headerComponent = {
    render() {
        return `
            <nav>
                <div class="logo">
                    <a href="#home">LOGO</a>
                </div>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#products">PRODUCTS</a></li>
                    <li><a href="#checkout"> <i class="fa fa-shopping-cart"></i> CHECKOUT</a> <span id="products-count">0</span> </li>
                </ul> 
            </nav>
        `
    }
}

export default headerComponent;