function renderProductsIndexPage() {
    let eMainProducts = document.querySelector(".main-products");

    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `
        <div class="product">
        <img
          src="https://images.unsplash.com/photo-1556316918-880f9e893822?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
        />
        <div class="product-info-container">
          <div class="product-info">
            <h4>${products[i].name}</h4>
            <p>${formatCurrency(products[i].price)}</p>
          </div>
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>
        `;
    }
    eMainProducts.innerHTML = str;
}
renderProductsIndexPage();

function handleProfileClick() {
    document.querySelector(".cart").classList.toggle('show');
}
let modal = document.querySelector(".cart");
let profile = document.querySelector(".icon-profile");

window.onclick = function (event) {
    if (event.target !== modal && event.target !== profile) {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    }
}