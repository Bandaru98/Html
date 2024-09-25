
function flower(flowername, callback) {
    setTimeout(() => {
        const output = document.getElementById('output');
        output.innerHTML += '<p>Flowers</p>';
        callback(flowername);
    }, 1000);
}

function leave(flowerleave, callback) {
    setTimeout(() => {
        console.log(flowerleave);
        const output = document.getElementById('output');
        output.innerHTML += '<p>it shows dif colors & shapes</p>';
        callback(['Rose', 'Jasmine', 'Dahlia', 'Lilly']);
    }, 2000);
}

leave('Triangular shape', (flowers) => {
    const output = document.getElementById('output');
    output.innerHTML += '<p>' + flowers.join(', ') + '</p>';
    const flowername = flowers[0];
    flower(flowername, (flower) => {
        output.innerHTML += '<p>' + flower + '</p>';
    });
});