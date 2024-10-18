


let shoping = document.querySelector(".shoping");
let productsitemslist = document.querySelector(".products-itemslist");
shoping.addEventListener("click", ()=>{
productsitemslist.classList.toggle("down")
})

let counter = document.querySelector(".counter");
let itemcontainer = document.querySelector(".products-itemslist");
let addTocartEl = document.querySelectorAll(".add");
let itemcount = 0;
let totalPrice = 0;
addTocartEl.forEach((key)=>{
   key.addEventListener("click", ()=>{
       itemcount++;
       counter.innerHTML = itemcount;
let imageItems = key.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src;
let productPrice = key.previousElementSibling.textContent; 

let card = document.createElement("div");
card.className = `products-itemslis`
card.innerHTML = `
 <img src="${imageItems}" alt="">
    <p>${productPrice}</p>
    <button class="remove">Remove</button>
`;
itemcontainer.appendChild(card);

let priceValue = parseFloat(productPrice.replace("Price: Taka", ""))
totalPrice += priceValue;
document.getElementById("tota-price").textContent = `Total Price : ${totalPrice} Taka `


   });
});

itemcontainer.addEventListener("click", (event)=>{
    if(event.target.classList.contains("remove")){

let productPrice = event.target.previousElementSibling.textContent;
let priceValue = parseFloat(productPrice.replace("Price: Taka", ""))
totalPrice -= priceValue;
document.getElementById("tota-price").textContent = `Total Price : ${totalPrice} Taka `
        itemcount--;
        counter.innerHTML = itemcount;
        event.target.parentElement.remove();
    }
});
