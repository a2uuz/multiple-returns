function isFieldEmpty() {
   let field = document.querySelector('#info');
    if (field.value === '') {
    return true;
    } else {
      return false;
    }
}

let fieldTest = isFieldEmpty();

if (fieldTest === true) {
    alert('Please provide your information.');
}