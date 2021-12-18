const becomeSellerElement = document.querySelector('.become-seller');
const applyForm = document.querySelector('.apply-form');
const productListingElement = document.querySelector('.product-listing');
const showApplyFormBtn = document.querySelector('#apply-btn');
const loader = document.querySelector('.loader');


window.onload = () => {
    if (sessionStorage.user) {
        let user = JSON.parse(sessionStorage.user);
        if (compareToken(user.authToken, user.email)) {
            if (!user.seller) {
                becomeSellerElement.classList.remove('hide');
            } else {
                productListingElement.classList.remove('hide');
            }
        } else {
            location.replace('/login');
        }
    } else {
        location.replace('/login');
    }
}

showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})

const applyFormButton = document.querySelector('#apply-form-btn');
const bussinessName = document.querySelector('#business-name');
const address = document.querySelector('#business-add');
const about = document.querySelector('#about');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const legitInfo = document.querySelector('#legitInfo');

applyFormButton.addEventListener('click', () => {
    if (!bussinessName.value.length || !address.value.length || !about.value.length || !number.value.length) {
        showAlert('fill all the inputs');
    } else if (!tac.checked || !legitInfo.checked) {
        showAlert('you must agree to our terms');
    } else {
        //making server request
        loader.style.display = 'block';
        sendData('/seller', {
            name: bussinessName.value,
            address: address.value,
            about: about.value,
            number: number.value,
            tac: tac.checked,
            legit: legitInfo.checked,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})