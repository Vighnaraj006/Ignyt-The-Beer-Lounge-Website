const product = [
    {
        id: 0,
        image: 'sphegeti.jpg',
        title: 'Prawns Spaghetti',
        price: 400,
    },
    {
        id: 1,
        image: 'salad.jpg',
        title: 'Paneer Salad',
        price: 200,
    },
    {
        id: 2,
        image: 'fries.jpg',
        title: 'Fries With Chicken Wings',
        price: 350,
    },
    {
        id: 3,
        image: 'lefe.jpg',
        title: 'Abbaye de Leffe Blonde Beer',
        price: 631,
    },
    {
        id: 5,
        image: 'duff.jpg',
        title: 'Duff The Legendary Beer',
        price: 1000,
    },
    {
        id: 6,
        image: 'budwiser.jpg',
        title: 'Budwiser Premium',
        price: 150,
    },
    {
        id: 7,
        image: 'toit.jpg',
        title: 'Toit',
        price: 1500,
    },
    {
        id: 8,
        image: 'Budweiser-Magnum-Beer-330mL_front.webp',
        title: 'Budwiser Magnum',
        price: 400,
    },
    {
        id: 9,
        image: 'mojito.jpg',
        title: 'Beer Mojito',
        price: 550,
    },
    {
        id: 10,
        image: 'beersunset.jpg',
        title: 'Beer Sunset',
        price: 370,
    },
    {
        id: 11,
        image: 'missrosy.jpg',
        title: 'Miss Rosy',
        price: 270,
    },
    {
        id: 12,
        image: 'mangorush.jpg',
        title: 'Mango Rush',
        price: 450,
    },
    {
        id: 13,
        image: 'Summer-Shandy-002.webp',
        title: 'Summer Shandy',
        price: 280,
    },
    {
        id: 4,
        image: '1193108.jpg',
        title: 'KingFisher Premium',
        price: 300,
    }
];

let i = 0;

document.getElementById('root').innerHTML = product.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...product[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "RS " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "RS " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
