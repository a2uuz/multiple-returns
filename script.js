function isFieldEmpty() {
  const field = document.querySelector('#info');
  if(field.value === ''){
  return true;
  }else{
    return false;
  }
}

const fieldTest = isFieldEmpty();

if(fieldTest === true){
 alert(`Please provide your information.`); 
}else{
 alert(`You're all set broski`); 
}