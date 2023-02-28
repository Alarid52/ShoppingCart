const getItems = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const items = await response.json();
        console.log(items);
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
    const jewelGrid = document.querySelector('#jewelry');
    const jewelCards = jewelGrid.querySelector(".cards");
    jewelCards.innerHTML += `<div class="card">
            <img src=${item.image} alt="">
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating.rate} / 5</p><span>Stock: ${item.rating.count}</span>
            <h4>Price: $${item.price}</h4>
            <button class="add-cart" id="${item.id}">Add to cart</button>
        </div>`;
}

const printElectronics = (item) => {
    const electroGrid = document.querySelector('#electronics');
    const electroCards = electroGrid.querySelector(".cards");
    electroCards.innerHTML += `<div class="card">
            <img src=${item.image} alt="">
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating.rate} / 5</p><span>Stock: ${item.rating.count}</span>
            <h4>Price: $${item.price}</h4>
            <button class="add-cart" id="${item.id}">Add to cart</button>
        </div>`;
}

const printWomen = (item) => {
    const womenGrid = document.querySelector('#women');
    const womenCards = womenGrid.querySelector(".cards");
    womenCards.innerHTML += `<div class="card">
            <img src=${item.image} alt="">
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating.rate} / 5</p><span>Stock: ${item.rating.count}</span>
            <h4>Price: $${item.price}</h4>
            <button class="add-cart" id="${item.id}">Add to cart</button>
        </div>`;
}

const printMen = (item) => {
    const menGrid = document.querySelector('#men');
    const menCards = menGrid.querySelector(".cards");
    menCards.innerHTML += `<div class="card">
            <img src=${item.image} alt="">
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating.rate} / 5</p><span>Stock: ${item.rating.count}</span>
            <h4>Price: $${item.price}</h4>
            <button class="add-cart" id="${item.id}">Add to cart</button>
        </div>`;
}

getItems();



