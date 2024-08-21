const miniatures = document.querySelectorAll(".miniature");
const miniaturesLightBox = document.querySelectorAll(".miniature-lightbox");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let mobilePhotoIndex = 0;
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
let indexCounter = 0;
const counter = document.querySelector(".counter");
const overlay = document.querySelector(".overlay");
const cartField = document.querySelector(".cart-field");
const selectedImage = document.querySelector(".selected");
const sneakersPrice = 125.0;
init();
function init() {
  ClickMiniaturesContainer();
  ClickMiniaturesLightbox();
  openLightBox();
  closeLightBox();
  setupCounter();
  buttonAddToCart();
  toggleCart();
  ArrowsMobile();
  propertyMobileMenu();
}
function ClickMiniaturesLightbox() {
  miniaturesLightBox.forEach((miniature, index) => {
    miniature.addEventListener("click", () => {
      const miniatureLightBoxEmphasis = document.querySelector(
        ".miniature-lightbox.emphasis"
      );
      miniatureLightBoxEmphasis.classList.remove("emphasis");
      miniature.classList.add("emphasis");

      const selectedLightBoxImage =
        document.querySelector(".selected-lightbox");
      selectedLightBoxImage.src = `images/image-product-${index}.jpg`;
    });
  });
}
function ClickMiniaturesContainer() {
  miniatures.forEach((miniature, index) => {
    miniature.addEventListener("click", () => {
      const miniatureEmphasis = document.querySelector(".miniature.emphasis");
      miniatureEmphasis.classList.remove("emphasis");
      miniature.classList.add("emphasis");

      selectedImage.src = `images/image-product-${index}.jpg`;
    });
  });
}
function propertyMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", () => {
    const mobileNavBar = document.querySelector(".navbar");
    mobileNavBar.classList.add("open");
    overlay.classList.add("active");

    const closeMobileNavbar = document.querySelector(".close-mobile-navbar");
    closeMobileNavbar.addEventListener("click", () => {
      mobileNavBar.classList.remove("open");
      overlay.classList.remove("active");
    });
  });
}
function ArrowsMobile() {
  arrowRight.addEventListener("click", () => {
    if (mobilePhotoIndex === 3) return;
    mobilePhotoIndex++;
    selectedImage.src = `images/image-product-${mobilePhotoIndex}.jpg`;
  });
  arrowLeft.addEventListener("click", () => {
    if (mobilePhotoIndex === 0) return;
    mobilePhotoIndex--;
    selectedImage.src = `images/image-product-${mobilePhotoIndex}.jpg`;
  });
}
function buttonAddToCart() {
  const mainButton = document.getElementById("main-button");
  mainButton.addEventListener("click", () => {
    if (counter.textContent == 0) return;
    const quantity = propertyCart();
    cartField.classList.add("visible");
    const cartCounter = cartExponent(quantity);
    dumpCart(cartCounter);
  });
}
function closeLightBox() {
  const closeLightBox = document.querySelector(".close");
  closeLightBox.addEventListener("click", () => {
    const lightBox = document.querySelector(".light-box");
    lightBox.classList.remove("open");
  });
}
function openLightBox() {
  selectedImage.addEventListener("click", () => {
    const lightBox = document.querySelector(".light-box");
    lightBox.classList.add("open");
  });
}
function toggleCart() {
  const clickOnCart = document.querySelector(".cart");
  clickOnCart.addEventListener("click", () => {
    cartField.classList.toggle("visible");
  });
}
function dumpCart(cartCounter) {
  const delected = document.getElementById("delected");
  delected.addEventListener("click", () => {
    document.querySelector(".cart-informations").innerHTML =
      "Your Cart is empty";
    cartCounter.innerHTML = "0";
  });
}
function cartExponent(quantity) {
  const cartCounter = document.querySelector(".cart-counter");
  cartCounter.classList.add("visible");
  cartCounter.innerHTML = quantity;
  return cartCounter;
}
function propertyCart() {
  const quantity = counter.textContent;
  const price = quantity * sneakersPrice;
  const finalPrice = `
    <div class="middle">
      <img src="images/image-product-1-thumbnail.jpg" alt="miniature">
      <div class="cart-details">
        <p>Fall Limited Edition Sneakers</p>
        <p class="cart-informations"> $125.00 x <span class="quantidade-do-carrinho">${quantity} = </span> <strong>${price}.00</strong></p>
      </div>
      <img id="delected" src="images/icon-delete.svg" alt="delected">
    </div>
    <button class="checkout">checkout</button>`;
  document.querySelector(".cart-informations").innerHTML = finalPrice;
  return quantity;
}
function minusQuantityInCart() {
  if (indexCounter > 0) {
    indexCounter--;
    counter.innerHTML = indexCounter;
  }
}
function plusQuantityInCart() {
  indexCounter++;
  counter.innerHTML = indexCounter;
}
function setupCounter() {
  plus.addEventListener("click", plusQuantityInCart);
  minus.addEventListener("click", minusQuantityInCart);
}