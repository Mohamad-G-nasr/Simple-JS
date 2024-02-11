var allProducts = document.querySelectorAll(".products li");
var div1 = document.querySelector("#div1");
var btn1 = document.querySelector("#showPrice");
var div2 = document.querySelector("#div2");
var totalPrice = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    totalPrice += +item.getAttribute("price");
    div1.innerHTML += item.textContent + ", ";

    if (div1.innerHTML != "") {
      btn1.style.display = "Block";
    }
  };
});

btn1.onclick = function () {
  div2.innerHTML = totalPrice;
};
