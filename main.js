let spans = document.querySelectorAll("h1 span");
let currentIndex = 0;

function color() {
  spans.forEach((span) => {
    span.classList.remove("active");
  });
  spans[currentIndex].classList.add("active");
  currentIndex++;
  if (currentIndex >= spans.length) {
    currentIndex = 0;
  }
}

let inter = setInterval(color, 1000);

function changeimage(smallimg) {
  let mainimage = document.querySelector(".img-box");
  mainimage.src = smallimg.src;

  let smallImages = document.querySelectorAll(".small");

  smallImages.forEach((e) => {
    e.style.opacity = 0.5;
    smallimg.style.opacity = 1;
  });
}

let add = document.querySelectorAll(".add-cart");
let counter = document.querySelector(".counter");
let cart = document.getElementById("cart");
let sidebar = document.querySelector(".sidebar");

cart.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

add.forEach((button) => {
  button.addEventListener("click", function () {
    counter.textContent++;

    sidebar.classList.add("show");

    let product = this.parentElement;
    let imgsrc = product.querySelector("img").src;
    let price = product.querySelector("h6").innerText;
    
    let div = document.createElement("div");
    div.className = "added";
    let img = document.createElement("img");
    img.src = imgsrc;
    div.appendChild(img);
    let h = document.createElement("h5");
    h.innerText = price;
    div.appendChild(h);
    let plus = document.createElement("i");
    plus.className = "bx bxs-plus-circle";
    div.appendChild(plus);
    let minus = document.createElement("i");
    minus.className = "bx bxs-minus-circle";
    div.appendChild(minus);
    sidebar.appendChild(div)
  });
});
