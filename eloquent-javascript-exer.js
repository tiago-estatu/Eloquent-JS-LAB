/*
        Exercícios do livro
        Eloquent Javascript
*/


//Piramide invertida
for (let line = '#'; line.length < 8; line += '#')
console.log(line)
/*************************************************************************** */


// Ex: Fizz ou Buzz
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
/*************************************************************************** */



// Ex: ChessBoard (Minha solução) 
var tamanhoLine = 10;
var qtdLinhas = 5;
  for(let pulaLinha = 1; pulaLinha <= qtdLinhas; pulaLinha ++){
    let preto = "";
        for(let line = 1; line <= tamanhoLine; line ++){
          preto += "# ";
      }
     let branco = "";
        for(let line2 = 1; line2 <= tamanhoLine; line2 ++){
          branco += " #";
      }
        console.log(preto); 
    console.log(branco);
  }

// Ex: ChessBoard (solução do autor livro) 
let size = 2;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
/*************************************************************************** */



function findSolution(target){
    function find(current, history){
        if(current == target){
            return history;
        } else if(current > target){
            return null;
        } else{
            return find(current + 5, "(${history} + 5)") || find(current * 3, "(${history} * 3)");            
        }
    }
    return find(1,"1");
}
console.log(findSolution(24));


// Ex: Retornar o menor número entre dois parametos 
const giveMin = function(a,b){
    if(a < b){
        return a;
    } else{
        return b;
    }
}
console.log(giveMin(15,30))

// Ex: Retornar o menor número entre dois parametos 
const giveMin = function(a,b){
    return Math.min(a,b);
}
console.log(giveMin(15,30))

// Ex: Retornar o menor número entre dois parametos 
const giveMin = (a,b) => Math.min(a,b);
console.log(giveMin(15, -30))
/*************************************************************************** */





/* 
  EX: receber 2 parametros e retornar um array com todos os
  numeros entres os recebidos como parametro
  ---------------------------------------------------

  EX2: realizar a soma de todos os números do array
*/ 
Array.prototype.sum = function () {
  for(var total = 0,l=this.length;l--;total+=this[l]); return total;
}

var newGroupNumbers = [];
const constroeNewArray = function(num1,num2){
  for(let i = num1; i <=num2; i++){
    newGroupNumbers.push(i);
  }
  return newGroupNumbers;
}

//construção do array com os números passados
console.log(constroeNewArray(1,10))

//Passo o conjunto de numeros para o método sum()
// para realizar a soma
newGroupNumbers.sum()


// Solução do Livro
// Contrução de arrays
// Crescente e decrecente
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

//Faz a soma do conteúdo do array 
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55 

/*************************************************************************** */


/*************************************************************************** 
  REVERSING ARRAY
  RECEBE ARRAY COMO PARAMETRO E O RETORNA INVERTIDO
*/
const arrayRevertor = function(array){
  //Função para comparar e ordenar o array de forma correta
  // Exemplo w3c shool website
  array.sort(function(a, b){return a - b});  
  array.reverse();
  return array;
}
console.log(arrayRevertor([40, 100, 1, 5, 25, 10]))


/* -----------------  SOLUÇÃO DO LIVRO ------------------------------- */
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/********************************************************************************** */


