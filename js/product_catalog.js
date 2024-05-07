/*----------------------------menu-------------------------*/

document.addEventListener('DOMContentLoaded', function() {


/*----------------------------cart-------------------------*/



const cart = document.querySelector('.cart__value');
let cartValue = 0;

function updateCartValueForCard(parentItem) {
    let cartValue = 0;
    let qtyInput = parentItem.querySelector('.qty');
    cartValue = parseInt(qtyInput.value) || 0;
    document.querySelector('.cart__value').textContent = cartValue;
    document.querySelector('.cart__value').classList.toggle('inactive', cartValue === 0);
}

document.querySelectorAll('.qty').forEach(qtyInput => {
    qtyInput.value = '0';
});

function updateCartValue() {
    let cartValue = 0;
    document.querySelectorAll('.qty').forEach(qtyInput => {
        cartValue += parseInt(qtyInput.value) || 0;
    });
    document.querySelector('.cart__value').textContent = cartValue;
    document.querySelector('.cart__value').classList.toggle('inactive', cartValue === 0);
}


function addToCartHandler(e) {
    e.preventDefault();
    let parentItem = this.closest('.catalog__container_item');
    let qtyInput = parentItem.querySelector('.qty');
    qtyInput.value = '1'; 
    updateCartValue(); 
}


function changeCartItemQuantity(delta) {
    return function () {
        let parentItem = this.closest('.catalog__container_item');
        let qtyInput = parentItem.querySelector('.qty');
        let qtyVal = parseInt(qtyInput.value) + delta;
        qtyVal = Math.max(qtyVal, 0);
        qtyInput.value = qtyVal;
        parentItem.querySelector('.items__value').textContent = qtyVal;
        updateCartValueForCard(parentItem); 
    };
}

function showInfoHandler() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

function openCartHandler() {
   
    const cartPanelModal = document.querySelector('.cart-panel-modal');
   
    cartPanelModal.classList.add('cart-panel-active');
   
    document.querySelector('.cart-panel__container').classList.toggle('cart-panel-active');
}

document.querySelector('.shopping-cart_btn').addEventListener('click', openCartHandler);


document.querySelectorAll('.add-to-cart_btn').forEach(btn => btn.addEventListener('click', addToCartHandler));
document.querySelectorAll('.one-add-cart_btn').forEach(btn => btn.addEventListener('click', changeCartItemQuantity(1)));
document.querySelectorAll('.remove-from-cart_btn').forEach(btn => btn.addEventListener('click', changeCartItemQuantity(-1)));
document.querySelectorAll('.item__show-info').forEach(btn => btn.addEventListener('click', showInfoHandler));

document.querySelectorAll('.qty').forEach(qtyInput => qtyInput.addEventListener('change', updateCartValue));




/*-------------------------------------Side card menu.........................*/

   
    function showSideMenu(event) {
        event.preventDefault();
        let parentItem = event.target.closest('.catalog__container_item');
        let sideMenu = parentItem.querySelector('.item__props_block');
        if (sideMenu) {
            sideMenu.classList.toggle('active');
        }
    }

  
    let showInfoButtons = document.querySelectorAll('.item__show-info');  

    
    showInfoButtons.forEach(function(button) {
        button.addEventListener('click', showSideMenu);
    });


/*-------------------------------------dynamically added cards//do not work properly.........................*/

/*
let cardData = [];

function addCardData(data) {
    cardData.push(data);
}

function updateCards() {
    const container = document.querySelector('.catalog__container');

    cardData.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('catalog__container_item');

      
        card.style.boxSizing = 'border-box';
        card.style.marginLeft = '10px';
        card.style.marginRight = '10px';
        card.style.width = 'calc(25% - 20px)';
        card.style.marginTop = '20px';
        card.style.marginBottom = '30px';
        card.style.position = 'relative';
        card.style.transition = '250ms all';
        card.style.boxShadow = '5px 5px 13px rgba(0, 0, 0, 0.12)';
        card.style.padding = '10px';
        card.style.overflow = 'hidden';
        card.style.flexGrow = '1';

        card.innerHTML = `
            <button class="item__show-info circle_btn"></button>
            <div class="item__image">
                <img width="400" height="500" src="${data.imageSrc}" alt="${data.title}">
            </div>
            <div class="btn__block">
                <button class="add-to-cart_btn circle_btn">
                    <span class="items__value active">1</span>
                </button>
                <button class="one-add-cart_btn circle_btn active">+</button>
                <button class="remove-from-cart_btn circle_btn active">−</button>
            </div>
            <div class="item__props_block scroll__bar_styles">
                <div class="force-overflow">
                    <h4 class="props__title"><strong>${data.title}</strong></h4>
                    <p>${data.description}</p>
                </div>
            </div>
            <div class="item__info-text">
                <p class="item__price">
                    <span class="amount">${data.price}</span>
                </p>
            </div>
        `;

        container.appendChild(card);

        applyStylesAndEventHandlers(card);
        addEventListenersToCard(card);
    });
}

function addEventListenersToCard(card) {
    const showInfoButton = card.querySelector('.item__show-info');
    showInfoButton.addEventListener('click', showInfoHandler);

    const addToCartBtn = card.querySelector('.add-to-cart_btn');
    addToCartBtn.addEventListener('click', addToCart);

    const oneAddCartBtn = card.querySelector('.one-add-cart_btn');
    oneAddCartBtn.addEventListener('click', incrementCart);

    const removeFromCartBtn = card.querySelector('.remove-from-cart_btn');
    removeFromCartBtn.addEventListener('click', decrementCart);
}


function addToCart(event) {
    let parentItem = event.target.closest('.catalog__container_item');
    let index = Array.from(parentItem.parentNode.children).indexOf(parentItem); 
    
    cardData[index].quantity = 1;

    let itemsValue = parentItem.querySelector('.items__value');
    itemsValue.textContent = cardData[index].quantity;

    updateCartValue();
}

function incrementCart(event) {
    let parentItem = event.target.closest('.catalog__container_item');
    let index = Array.from(parentItem.parentNode.children).indexOf(parentItem); 

    cardData[index].quantity++;

    let itemsValue = parentItem.querySelector('.items__value');
    itemsValue.textContent = cardData[index].quantity;

    updateCartValue();
}

function decrementCart(event) {
    let parentItem = event.target.closest('.catalog__container_item');
    let index = Array.from(parentItem.parentNode.children).indexOf(parentItem); 


    cardData[index].quantity = Math.max(cardData[index].quantity - 1, 0);

    let itemsValue = parentItem.querySelector('.items__value');
    itemsValue.textContent = cardData[index].quantity;

    updateCartValue();
}

function showInfoHandler() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}


addCardData({
    title: "Berry Bliss Cupcake",
    imageSrc: "/assets/imgs/8_cupcake.png",
    price: "12.00",
    description: "Ein Cupcake aus natürlichen Zutaten ist ein köstliches Gebäckstück, das mit hochwertigen und unverarbeiteten Zutaten hergestellt wird."
});

updateCards();*/

});