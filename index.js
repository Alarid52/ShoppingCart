const getItems = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const items = await response.json();
        console.log('Response API:', items);
        items.map((item) => {
            switch (item.category) {
                case 'jewelery':
                    printJewels(item)
                    break;

                case 'electronics':
                    printElectronics(item)
                    break;

                case "women's clothing":
                    printWomen(item);
                    break;

                case "men's clothing":
                    printMen(item);
                    break;

                default:
                    console.log("No existe en catalogo");
                    break;
            }
        });
    } catch (error) {
        console.log("Error al conectar API");
    }
}

const printJewels = (item) => {
    const jewelCards = document.querySelector('#jewelry').querySelector(".cards");
    jewelCards.innerHTML += `<div class="card">
                                <img src=${item.image} alt="">
                                <h3>${item.title}</h3>
                                <p>Rating: ${item.rating.rate} / 5</p>
                                <h4>Price: $${item.price}</h4>
                                <button class="add-cart" id="${item.id}">Add to cart</button>
                            </div>`;
}

const printElectronics = (item) => {
    const electroCards = document.querySelector('#electronics').querySelector(".cards");
    electroCards.innerHTML += `<div class="card">
                                <img src=${item.image} alt="">
                                <h3>${item.title}</h3>
                                <p>Rating: ${item.rating.rate} / 5</p>
                                <h4>Price: $${item.price}</h4>
                                <button class="add-cart" id="${item.id}">Add to cart</button>
                            </div>`;
}

const printWomen = (item) => {
    const womenCards = document.querySelector('#women').querySelector('.cards');
    womenCards.innerHTML += `<div class="card">
                                <img src=${item.image} alt="">
                                <h3>${item.title}</h3>
                                <p>Rating: ${item.rating.rate} / 5</p>
                                <h4>Price: $${item.price}</h4>
                                <button class="add-cart" id="${item.id}">Add to cart</button>
                            </div>`;
}

const printMen = (item) => {
    const menCards = document.querySelector('#men').querySelector('.cards');
    menCards.innerHTML += `<div class="card">
                                <img src=${item.image} alt="">
                                <h3>${item.title}</h3>
                                <p>Rating: ${item.rating.rate} / 5</p>
                                <h4>Price: $${item.price}</h4>
                                <button class="add-cart" id="${item.id}">Add to cart</button>
                            </div>`;
}

document.addEventListener('DOMContentLoaded', getItems)