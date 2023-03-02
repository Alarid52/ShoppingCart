const btnCart = document.querySelector('#btn-cart');
const iCart = document.querySelector('.btni-cart');
const pathCart = document.querySelector('#path');
const menuCart = document.querySelector('.menu-cart');
const container = document.querySelector('.container-items');

let arrayItems = [];

const createItems = (e) => {
    if (e.target.classList.contains('add-cart')) {
        menuCart.classList.add('hidden');
        const product = e.target.parentElement;
        const dataItem = {
            id: product.querySelector('.add-cart').id,
            image: product.querySelector('img').src,
            title: product.querySelector('h3').textContent,
            price: Number(product.querySelector('h4').textContent.replace(/[^0-9.-]+/g, "")),
            quantity: 1
        }
        if (!arrayItems.some((element) => element.id === dataItem.id)) {
            arrayItems = [...arrayItems, dataItem];
            printCart(dataItem);
        } else {
            arrayItems.map((element) => {
                if (element.id === dataItem.id) {
                    element.quantity++;
                }
            });
        }
    }
}

const minMaxItems = (e, arrayItems) => {
    if (e.target.classList.contains('btn-cuantity-min')) {
        const rowItem = e.target.parentElement.parentElement.children[1].querySelector('h6').querySelector('span').textContent;
        arrayItems.map((item) => {
            if (item.id === rowItem) {
                item.quantity--;
                if (item.quantity === 0) {
                    const i = arrayItems.indexOf(item);
                    arrayItems = arrayItems.splice(i, 1);
                }
            }
        });
    }
    if (e.target.classList.contains('btn-cuantity-max')) {
        const rowItem = e.target.parentElement.parentElement.children[1].querySelector('h6').querySelector('span').textContent;
        arrayItems.map((item) => {
            if (item.id === rowItem) {
                item.quantity++;
            }
        });
    }
}

const printCart = (item) => {
    menuCart.innerHTML += `<div class="row">
        <img src=${item.image} alt="">
        <div class="data-item-cart">
            <h5>${item.title}</h5>
            <h6>ID: <span>${item.id}</span></h6>
            <h4>$${(item.price * item.quantity).toFixed(2)}</h4>
        </div>
        <div class="cuantity">
            <button type="button" class="btn-cuantity-min">
                 - </button>
            <h5>${item.quantity}</h5>
            <button type="button" class="btn-cuantity-max">
                +</button>
        </div>
    </div>`;
}

const printTotal = (arrayItems) => {
    menuCart.innerHTML += `<div class="total-price"></div>`;
    const totalPrice = menuCart.querySelector('.total-price');
    let total;
    if (arrayItems.length === 0) {
        total = 0;
    } else {
        total = (arrayItems.map((item) => (item.quantity * item.price))).reduce((prev, next) => prev + next);
    }
    totalPrice.innerHTML = `<h4>Total Price: $${total.toFixed(2)}</h4>`;
}

const cartItems = (e) => {
    createItems(e);
    minMaxItems(e, arrayItems);
    menuCart.innerHTML = "";
    arrayItems.map((item) => printCart(item));
    printTotal(arrayItems);
}

document.addEventListener('click', cartItems);

document.addEventListener('click', (e) => {
    if (e.target === btnCart || e.target === iCart || e.target === pathCart) {
        menuCart.classList.toggle('hidden');
    }
});         