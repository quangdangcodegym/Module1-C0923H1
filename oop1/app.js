class Product {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
}
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let giacam = new Category(1, "Gia cầm");
let giasuc = new Category(2, "Gia súc");

let categories = [giacam, giasuc];

let p1 = new Product(1, "Gà", 220000, 5, giacam);
let p2 = new Product(2, "Vịt", 240000, 5, giacam);
let p3 = new Product(3, "Heo", 500000, 3, giasuc);

let products = [p1, p2, p3];

function renderProducts() {
    let eTbodyMain = document.querySelector("#tbodyMain");

    let str = "";
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
        str += `
            <tr>
            <td>${products[i].id}</td>
            <td>${products[i].name}</td>
            <th>${products[i].category.name}</th>
            <td>${products[i].quantity}</td>
            <td>${products[i].price}</td>
            <td>${products[i].quantity * products[i].price}</td>
            <td>
            <a href="" class="btn btn-edit"
                ><i class="fa-solid fa-pen-to-square"></i
            ></a>
            <a href="" class="btn btn-delete"
                ><i class="fa-solid fa-trash"></i
            ></a>
            </td>
        </tr>
        `
    }

    str += `
        <tr>
        <td colspan="5" class="tb-last-row tb-last-row-total">
        Total amount
        </td>
        <td class="tb-last-row">${total}</td>
        <td></td>
    </tr>
    `

    eTbodyMain.innerHTML = str;
}
renderProducts();

function handleBtnAdd() {
    let name = document.querySelector(".frmCreate input[name='txtName'").value;
    let price = document.querySelector(".frmCreate input[name='txtPrice'").value;
    let quantity = document.querySelector(".frmCreate input[name='txtQuantity'").value;
    let categoryId = document.querySelector(".frmCreate select[name='sCategory'").value;

    let cate = null;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == categoryId) {
            cate = categories[i];
        }
    }
    let pNew = new Product(products.length + 1, name, price, quantity, cate);

    products.push(pNew);
    renderProducts();
}