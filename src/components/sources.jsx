import { evaluate } from 'mathjs';

export const ids = {
  '0':'zero',
  '1':'one',
  '2':'two',
  '3':'three',
  '4':'four',
  '5':'five',
  '6':'six',
  '7':'seven',
  '8':'eight',
  '9':'nine',
  '+':'add',
  '-':'subtract',
  '*':'multiply',
  '/':'divide',
  '=':'equals',
  '.':'decimal',
  'AC':'clear'
};

export function remover(str) {
  const operators = ['+', '*', '/', '-'];
  let validation = false;
  let negative = false;
  let newStr = [];
  const arrStr = str.split("");
  for (let i = arrStr.length-1; i>=0; i--) {
    if (arrStr[i] == '-' && validation === false && negative == false) {
      negative = true;
      newStr.unshift(arrStr[i]);
      }else if( operators.includes(arrStr[i]) && validation === false){
      validation = true;
      newStr.unshift(arrStr[i]);
      }else if (operators.includes(arrStr[i]) && validation === true){ 
      }
      else{
        newStr.unshift(arrStr[i])
      }
    };
    return newStr.join('')
  };

  export function hasConsecutiveOperators(str) {
    const operators = ['+', '-', '*', '/'];
    for (let i = 0; i < str.length - 1; i++) {
      if (operators.includes(str[i]) && operators.includes(str[i + 1])) {
        return true; // Consecutive operators found
      }
    }
    return false; // No consecutive operators found
  };