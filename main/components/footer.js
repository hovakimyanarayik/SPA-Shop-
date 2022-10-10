import { shopInfo } from "../constants.js";
import { paymentSystems } from "../constants.js";


const footerComponent = {
    render() {
        return `
            <div>
                <p class="footer-title">Store</p>
                <p class="footer-info"> <i class="fa fa-fw fa-map-marker"></i> ${shopInfo.compName}</p>
                <p class="footer-info"><i class="fa fa-fw fa-phone"></i> ${shopInfo.tel}</p>
                <p class="footer-info"><i class="fa fa-fw fa-envelope"></i> ${shopInfo.email}</p>
            </div>
            <div>
                <p class="footer-title">We accept</p>
                <p class="footer-info"><i class="fa fa-fw fa-cc-amex"></i> ${paymentSystems.amex}</p>
                <p class="footer-info"><i class="fa fa-fw fa-credit-card"></i> ${paymentSystems.credCard}</p>
            </div>
        `
    }
}

export default footerComponent;