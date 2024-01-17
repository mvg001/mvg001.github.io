let cesta = [];
function addProduct(product) {
    product = product.trim().toLowerCase();
    if (product.length > 0 && !cesta.includes(product)) {
        cesta.push(product);
    }
}
function delProduct(product) {
    product = product.trim();
    if (product.length > 0) {
        const position = cesta.indexOf(product);
        if (position != -1) {
            cesta.splice(position,1);
        }
    }
}

function refreshDisplay() {
    const displayArea = document.querySelector("#products");
    let lista = '';
    if (cesta.length <= 0) { 
        lista = "cesta vacía"; 
    } else {
        lista = '<ul>';
        cesta.forEach(item => {
            lista += `<li>${item}</li>`;
        });
        lista += '</ul>';
    }
    displayArea.innerHTML = lista;
}

refreshDisplay();
document.querySelector("#addButton")
    .addEventListener("click", function () {
        const newProduct = document.querySelector("#item").value;
        document.querySelector("#item").value = '';
        addProduct(newProduct);
        refreshDisplay();
    });

document.querySelector("#delButton")
    .addEventListener("click", function () {
        const product = document.querySelector("#item").value;
        document.querySelector("#item").value = '';
        delProduct(product);
        refreshDisplay();
    });