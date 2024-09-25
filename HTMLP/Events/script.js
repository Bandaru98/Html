   // onClick events
   function onClick(element) {
    element.style.backgroundColor = 'green'
}
// onDbClick events
function onDbClick(element) {
    element.style.backgroundColor = 'red'
}
//onMouseout events
function onMouseout(element) {
    element.style.backgroundColor = 'blue'
}
//onMouseup events
function onMouseup(element) {
    element.style.backgroundColor = 'purple'
}
//onMousedown events
function onMousedown(element) {
    element.style.backgroundColor = 'orange'
}
//onMousemove events
function onMousemove(element) {
    //   element.style.backgroundColor = 'skyblue'
    // let num=Math.random()*10
    // let num=Math.random()
    let num = parseInt(Math.random() * 10)
    document.getElementById('boxer').innerText = num
}