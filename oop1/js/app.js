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


let categories = [];
let products = [];
let isEditing = false;
let KEY_PRODUCTS = "KEY_PRODUCTS";
let KEY_CATEGORIES = "KEY_CATEGORIES";

initData();
function initData() {
    if (localStorage.getItem(KEY_CATEGORIES) != null) {
        categories = JSON.parse(localStorage.getItem(KEY_CATEGORIES));
    } else {
        let giacam = new Category(1, "Gia cầm");
        let giasuc = new Category(2, "Gia súc");
        categories = [giacam, giasuc];

        // JSON.stringify(categories): chuyển từ đối tượng categories về chuỗi
        localStorage.setItem("KEY_CATEGORIES", JSON.stringify(categories));
    }


    if (localStorage.getItem(KEY_PRODUCTS) != null) {
        //Chuyển từ chuỗi JSON về thành dạng mảng
        products = JSON.parse(localStorage.getItem(KEY_PRODUCTS));
    } else {
        let p1 = new Product(1, "Gà", 220000, 5, categories[0]);
        let p2 = new Product(2, "Vịt", 240000, 5, categories[0]);
        let p3 = new Product(3, "Heo", 500000, 3, categories[1]);
        let products = [p1, p2, p3];

        localStorage.setItem("KEY_PRODUCTS", JSON.stringify(products));
    }
}
function formatCurrency(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}