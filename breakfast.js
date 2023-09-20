// let carts = document.querySelectorAll(".Order");
const count = document.getElementById("count")
console.log(count)

let product = [
  {
    id: 0,
    image: "images/english breakfast.jpeg",
    title: "English Breakfast",
    price: 14.99,
  },
  {
    id: 1,
    image: "images/waffles.jpeg",
    title: "Waffles",
    price: 11.99,
  },
  {
    id: 2,
    image: "images/pancake.jpeg",
    title: "Pancakes",
    price: 11.99,
  },
  {
    id: 3,
    image: "images/nigerian breakfast.jpeg",
    title: "Nigerian Breakfast",
    price: 14.99,
  },
];


// document.addEventListener("DOMContentLoaded", function(){
// })


for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(product[i]);
  });
}

function onloadCartNumbers(){
  let productNumbers = localStorage.getItem("cartNumbers")

  if(productNumbers){
    document.querySelector(".count").textContent = productNumbers
  }
}

// function cartNumbers(product) {
//   let productNumbers = localStorage.getItem("cartNumbers");

//   productNumbers = parseInt(productNumbers);
  

//   if (productNumbers) {
//     localStorage.setItem("cartNumbers", productNumbers + 1);
//     // count.textContent = productNumbers + 1;
//   } else {
//     localStorage.setItem("cartNumbers", 1);
//     // count.textContent = 1;
//   }

//   setItems(product)
// }

// function setItems(product){
// console.log("inside of setItems function")
// console.log("my product is", product)
// }

// onloadCartNumbers()

// let product = [
//     {
//         id: 0,
//         image: "images/english breakfast.jpeg",
//         title: "English Breakfast",
//         price: 14.99,
//     },
//     {
//         id: 1,
//         image: "images/waffles.jpeg",
//         title: "Waffles",
//         price: 11.99
//     },
//     {
//         id: 2,
//         image: "images/pancake.jpeg",
//         title: "Pancakes",
//         price: 11.99
//     },
//     {
//         id: 3,
//         image: "images/nigerian breakfast.jpeg",
//         title: "Nigerian Breakfast",
//         price: 14.99
//     },
//     {
//         id: 4,
//         image: "images/chapman.jpg",
//         title: "Chapman",
//         price: 9.99
//     },
//     {
//         id: 5,
//         image: "images/sex-on-the-beach.jpg",
//         title: "Sex on the beach",
//         price: 14.99
//     },
//     {
//         id: 6,
//         image: "images/mojito.jpeg",
//         title: "Mojito",
//         price: 19.99
//     },
//     {
//         id: 7,
//         image: "images/green-island-fragrance-cocktail.jpg",
//         title: "Green Island",
//         price: 9.99
//     },
//     {
//         id: 8,
//         image: "images/burger.jpeg",
//         title: "Burger",
//         price: 19.99
//     },
//     {
//         id: 9,
//         image: "images/suya.jpg"
//         title: "Suya",
//         price: 19.99
//     },
//     {
//         id: 10,
//         image: "images/spaghetti.jpeg"
//         title: "Spaghetti",
//         price: 24.99
//     },
//     {
//         id: 11,
//         image: "images/fried rice.jpg",
//         title: "Fried Rice Special",
//         price: 24.99
//     },
//     {
//         id: 12,
//         image: "images/chocolate.jpg"
//         title: "Chocolate Delights",
//         price: 9.99
//     },
//     {
//         id: 13
//         image: "images/fruits.jpg"
//         title: "Fruity Delights",
//         price: 11.99
//     },
//     {
//         id: 14,
//         image: "images/classic.jpeg"
//         title: "Classic Shakes",
//         price:
//     },
//     {
//         id: 15,
//         image:
//         title:
//         price:
//     },
//     {
//         id: 16,
//         image:
//         title:
//         price:
//     }
// ]
