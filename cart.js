const btnCart = document.querySelector('#btn-cart');
const iCart = document.querySelector('.btni-cart');
const menuCart = document.querySelector('.menu-cart');
const container = document.querySelector('.container-items');


let arrayItems = [];

const cartItems = (e) => {
    if (e.target.classList.contains('add-cart')) {
        const product = e.target.parentElement;
        const dataItem = {
            id: product.querySelector('.add-cart').id,
            image: product.querySelector('img').src,
            title: product.querySelector('h3').textContent,
            price: Number(product.querySelector('h4').textContent.replace(/[^0-9.-]+/g, "")),
            quantity: 1
        }
        if (!arrayItems.some((element) => element.id === dataItem.id)) {
            arrayItems = [...arrayItems, dataItem]
            printCart(dataItem)
        } else {
            arrayItems.map((element) => {
                if (element.id === dataItem.id) {
                    element.quantity++;
                }
            });
        }
        menuCart.innerHTML = "";
        arrayItems.map((item) => printCart(item));
        printTotal(arrayItems);
    }
    
}

const printTotal = (arrayItems) => {
    menuCart.innerHTML += `<div class="total-price"></div>`
    const totalPrice = menuCart.querySelector('.total-price')
    let total = (arrayItems.map((item) => (item.quantity * item.price))).reduce((prev, next) => prev + next);
    totalPrice.innerHTML = `<h4>Total Price: $${total.toFixed(2)}</h4>`
}

const printCart = (item) => {
    menuCart.innerHTML += `<div class="row">
    <img src=${item.image} alt="">
    <div class="data-item-cart">
        <h5>${item.title}</h5>
        <h4>$${(item.price * item.quantity).toFixed(2)}</h4>
    </div>
    <div class="cuantity">
        <button type="button" class="btn-cuantity-min">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477
                    20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                    fill="currentColor" />
            </svg></button>
        <h5>${item.quantity}</h5>
        <button type="button" class="btn-cuantity-max">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772
                    11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11
                    19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13
                    19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523
                    11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                    fill="currentColor" />
            </svg></button>
    </div>
    <div class="delete-item-menu">
        <button type="button" class="btn-delete">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543
                    2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228
                    3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569
                    21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772
                    20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772
                    19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                    fill="currentColor" />
                <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                <path d="M13 9H15V17H13V9Z" fill="currentColor" />
            </svg></button>
    </div>
</div>`;
}


document.addEventListener('click', cartItems);

document.addEventListener('click', (e) => {
    if (e.target === btnCart || e.target === iCart) {
        menuCart.classList.toggle('hidden')
    }
});        
   