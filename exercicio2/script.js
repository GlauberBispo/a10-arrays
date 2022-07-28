const numeros = [2,5,1,9,4,7,22,58,-21];
const string = ["cuscuz", "macaxeira", "inhame", "batata doce", "tapioca"];
const arrMisto = [2,7,"Glauber", "Nathi",5,5>2,3<1,"biscoito", ("5"===5)];

console.log(`Um Array apenas com números:
${numeros}.`);

console.log(`Um Array apenas com strings:
${string}.`);

console.log(`Um Array misto:
${arrMisto}.`);

console.log(`Array \"numeros\" possui ${numeros.length} itens`);

console.log(`Array \"string\" possui ${string.length} itens`);

console.log(`Array \"arrMisto\" possui ${arrMisto.length} itens`);

console.log(`O primeiro item do Array \"numeros\" é ${numeros[0]}`);

console.log(`O segundo item do Array \"string\" é ${string[1]}`);

console.log(`O terceiro item do Array \"arrMisto\" é ${arrMisto[2]}`);

console.log(`A Array \"numeros\" possui o número 2? ${numeros.includes(2)}`);

console.log(`A Array \"arrMisto\" possui espaços undefined? ${arrMisto.includes(undefined)}`);
