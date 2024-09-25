let Productlibrary = [
    { ProductName: 'Smart Phone', ProductList: 'Mobile', ProductQuantity: '1', ProductPrice: '10000' },
    { ProductName: 'Tv', ProductList: 'Gadget', ProductQuantity: '1', ProductPrice: '50000' },
    { ProductName: 'Smart Watch', ProductList: 'Watch', ProductQuantity: '1', ProductPrice: '8000' }
];

function displayProducts() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    Productlibrary.forEach((Product, index) => {
        let listrow = document.createElement('tr');
        listrow.innerHTML = `
        <td>${Product.ProductName}</td>
        <td>${Product.ProductList}</td>
        <td>${Product.ProductQuantity}</td>
        <td>${Product.ProductPrice}</td>
        <td>
            <button class='btn btn-first' onclick='editProduct(${index})'>Edit</button>
            <button class='btn btn-last' onclick='deleteProduct(${index})'>Delete</button>
        </td>`;
        itemList.appendChild(listrow);
    });
}

function addProducts() {
    const productName = prompt('Enter your Product name:');
    const productList = prompt('Enter your Product list:');
    const productQuantity = prompt('Enter your Product quantity:');
    const productPrice = prompt('Enter your Product price:');

    if (productName && productList && productQuantity && productPrice) {
        const newProduct = { ProductName: productName, ProductList: productList, ProductQuantity: productQuantity, ProductPrice: productPrice };
        Productlibrary.push(newProduct);
        displayProducts();
    } else {
        alert('Please enter valid information');
    }
}

function editProduct(index) {
    const productName = prompt('Enter your Product name:', Productlibrary[index].ProductName);
    const productList = prompt('Enter your Product list:', Productlibrary[index].ProductList);
    const productQuantity = prompt('Enter your Product quantity:', Productlibrary[index].ProductQuantity);
    const productPrice = prompt('Enter your Product price:', Productlibrary[index].ProductPrice);

    if (productName !== null && productList !== null && productQuantity !== null && productPrice !== null) {
        Productlibrary[index] = { ProductName: productName, ProductList: productList, ProductQuantity: productQuantity, ProductPrice: productPrice };
        displayProducts();
    } else {
        alert('Please enter valid information');
    }
}

function deleteProduct(index) {
    const confirmDelete = confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
        Productlibrary.splice(index, 1);
        displayProducts();
    }
}

displayProducts();