var ONES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];  
var TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];  
var HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];  
var THOUSANDS = ['M', 'MM', 'MMM', 'MMMM'];  
function convertToRoman(num) {  
 var ones = num % 10;  
 var tens = Math.floor(num / 10) % 10;  
 var hundreds = Math.floor(num / 100) % 10;  
 var thousands = Math.floor(num / 1000) % 10;  
 var largest = 1;  
 var s = '';  
 if (thousands > 0) {  
  s += THOUSANDS[thousands - 1];  
 }  
 if (hundreds > 0) {  
  s += HUNDREDS[hundreds - 1];  
 }  
 if (tens > 0) {  
  s += TENS[tens - 1];  
 }  
 if (ones > 0) {  
  s += ONES[ones - 1];  
 }  
 return s;  
}  
function onSubmit(e) {  
 e.preventDefault();  
 var val = document.querySelector('#number').value;  
 val = parseInt(val);  
 var result = '';  
 if (isNaN(val)) {  
  result = 'No es un número.';  
 } else if (val < 0) {  
  result = 'Esto no funciona para los números negativos.';  
 } else if (val === 0) {  
  result = 'Los romanos no tienen el concepto de cero.';  
 } else if (val >= 5000) {  
  result = 'Sólo se admiten números hasta el 4999.';  
 } else {  
  result = convertToRoman(val);  
 }  
 document.querySelector('#result').innerHTML = result;  
 return false;  
}  
document.addEventListener('DOMContentLoaded', function() {  
 document.querySelector('#number').addEventListener('input', onSubmit);  
});  