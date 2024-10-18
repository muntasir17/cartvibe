let scrollRevealOption = {
    // distance:"5px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container-image",{
    ...scrollRevealOption,
 origin:"left",
});
 ScrollReveal().reveal(".container-image img",{
     ...scrollRevealOption,
 delay : 600,
});
ScrollReveal().reveal(".write",{
    ...scrollRevealOption,
 origin:"left",
});
 ScrollReveal().reveal(".write .lekha",{
     ...scrollRevealOption,
 delay : 700,
});
let CustomerImages = document.querySelector(".customer-images");
let rev = document.querySelector(".rev");
let idx = 0
let customerIndex = [
    {
imageUrl : "https://static9.depositphotos.com/1371851/1203/i/450/depositphotos_12035829-stock-photo-young-man.jpg",
whatday : "Great collection and super fast delivery! I'm really happy with the quality of the products and will definitely shop again."
    },
    {
imageUrl : "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
whatday : "Amazing service! My order arrived earlier than expected, and the fabric quality is just perfect for the price."
    },
    {
imageUrl : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww",
whatday : "Superb experience! The products are trendy, affordable, and the free delivery was a nice bonus."
    },
    {
imageUrl : "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGV8ZW58MHx8MHx8fDA%3D",
whatday : "Loved everything about this site! Easy checkout, quick delivery, and the clothes fit perfectly."
    },
    {
imageUrl : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D",
whatday : "Rapid delivery and amazing quality! Items matched the description perfectly."
    },
    {
imageUrl : "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
whatday : "Quick delivery and excellent quality! Very satisfied with my purchase. Everything was good."
    },
    {
imageUrl : "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg",
whatday : "Fast shipping and great quality! Every item was exactly as shown."
    },
    {
imageUrl : "https://img.freepik.com/premium-photo/natural-beauty-portrait-young-woman-with-long-hair-modern-indoor-setting_1228708-1176.jpg",
whatday : "Quick delivery and excellent quality! Everything I received matched the description perfectly."
    },

];
customerDisplay();
function customerDisplay(){
CustomerImages.src = customerIndex[idx].imageUrl ;
rev.innerHTML = customerIndex[idx].whatday ;
}
function leftimage(){
    if(idx > 0){
idx--;
customerDisplay();
    }
}
function rightimage(){
    if(idx < customerIndex.length){
        idx++;
        customerDisplay();
    }
}


let loginbtn = document.querySelector(".log");
let wrapper = document.querySelector(".wrapper");
let google = document.querySelector(".fa-google");
let twitter = document.querySelector(".fa-x-twitter");
let facebook = document.querySelector(".fa-facebook");

let images = [
    {
        photoUrl : "shirt1.jpg",
    },
    {
        photoUrl : "shirt2.jpg",
    },
    {
        photoUrl : "shirt3.jpg",
    },
    {
        photoUrl : "shirt4.jpg",
    },
    {
        photoUrl : "shirt5.jpg",
    },
    {
        photoUrl : "shirt6.jpg",
    },
    {
        photoUrl : "shirt7.jpg",
    },
    {
        photoUrl : "shirt8.jpg",
    },
    {
        photoUrl : "shirt9.jpg",
    },
    {
        photoUrl : "shirt10.jpg",
    },
];

 let count = 0;

let imgaeOfShirts = document.querySelector(".imgaeOfShirts");
showDisplay();
function showDisplay(){
  imgaeOfShirts.src = images[count].photoUrl;
}

function prev(){
    if(count > 0){
count--;
showDisplay();
    }
}
function next(){
if(count < images.length){
    count++;
    showDisplay();
}
}




let login = document.querySelector(".loginbuton");
login.addEventListener("click", ()=>{
    wrapper.style.opacity = "0"
})
loginbtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});
google.addEventListener("click", ()=>{
    wrapper.style.opacity = "0"
})
facebook.addEventListener("click", ()=>{
    wrapper.style.opacity = "0"
})
twitter.addEventListener("click", ()=>{
    wrapper.style.opacity = "0"
})

