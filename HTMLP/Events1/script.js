function onFocus(element) {
    element.style.backgroundColor = 'green'
  }
  function onBlur(element) {
    element.style.backgroundColor = 'blue'
  }
  function onInput(element) {
    // console.log(element);
    let val = element.value
    document.getElementById('box').value = val
  }
  function onChange(element) {
    let val = element.value
    document.getElementById('box').value = val
  }