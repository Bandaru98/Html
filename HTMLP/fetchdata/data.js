async function fetchData() {
    let response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    let data = await response.json();

    let container = document.getElementById('container');
    container.innerHTML = ""; // Clear any existing content

    let table = document.createElement('table');
    table.innerHTML = `
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            `;

    data.products.forEach((item) => {
        let row = document.createElement('tr');
        row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.category}</td>
                    <td>${item.price}</td>
                `;
        table.appendChild(row);
    });

    container.appendChild(table);
}