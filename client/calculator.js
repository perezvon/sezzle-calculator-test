var keys = document.querySelectorAll('.calc-btn');
var operators = ['+', '-', '/', '*'];
    var decimalFlag = false;
    

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function() {
    var input = document.querySelector('.display');
    var equation = input.innerHTML;
    var btnVal = this.innerHTML;
    var lastChar = equation[equation.length -1];

    //remove leading 0
    if (equation == '0' && operators.indexOf(btnVal) < 0) input.innerHTML = '';
    
    //clear
    if (btnVal == 'C') {
      input.innerHTML = '0';
      decimalFlag = false;
    }

    //compute
    else if (btnVal == '=') {
      input.innerHTML = eval(equation);
    }
    
    //one decimal only
    else if (btnVal == '.') {
      if (!decimalFlag){
      input.innerHTML += btnVal;
      decimalFlag = true;
      }
    }

    //if operator is clicked
   else if (operators.indexOf(btnVal) > -1) {
     if (btnVal == '-' && equation == '0') {
        input.innerHTML = '' + btnVal;
      }
     else if (equation != '0'){ 
       if (operators.indexOf(lastChar) > -1) input.innerHTML = equation.replace(/.$/, btnVal);
     
      
       
     else input.innerHTML += btnVal;
   }
   }
           else
      input.innerHTML += btnVal;
 
 }
}