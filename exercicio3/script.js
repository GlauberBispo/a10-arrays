const numeros = [2,5,1,9,4,7,22,58,-21];
const string = ["cuscuz", "macaxeira", "inhame", "batata doce", "tapioca"];
const arrMisto = [2,7,"Glauber", "Nathi",5,5>2,3<1,"biscoito", ("5"===5)];

const numerosCopia = numeros.slice();
numerosCopia.push(100);
const stringCopia = string.slice();
stringCopia.pop();
const arrMistoCopia = arrMisto.slice();
arrMistoCopia.splice(1,1)

console.log(`
Adicionado o número 100 a Array \"numeros\":
Original: ${numeros}
Com Adição do item 100: ${numerosCopia}`)

console.log(`
Retirando o último item do Array \"string\":
Original: ${string}
Retirando o último item: ${stringCopia}`)

console.log(`
Retirando o segundo item do Array \"arrMisto\":
Original: ${arrMisto}
Retirando o segundo item: ${arrMistoCopia}`)