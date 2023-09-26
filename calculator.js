let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function updateCalcValue(value){
  calculation += value;
  document.querySelector('.calc-space').innerHTML =  calculation;
  return calculation
};


localStorage.setItem('calculation', JSON.stringify(calculation) );
 
function printValue(){
  document.querySelector('.calc-space').innerHTML = calculation;
}

