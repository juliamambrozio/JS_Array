const array = ['Júlia', 'Lívia', 'Gui']

array.pop() //remove o último elemento
console.log(array)

array.shift() //remove o primeiro elemento
console.log(array)

array.push('Júlia', 'Gui') //acrescenta por último
console.log(array)

array.unshift('Topy', 'Titi') //acrescenta primeiro
console.log(array)

//splice: adiciona e remove elementos

array.splice(1, 1) //remove um índice a partir do índice um
console.log(array)

array.splice(1, 0, 'Piti') //adiciona um elemento a partir do índice um
console.log(array)

//slice: retorna um novo array

const array2 = array.splice(2) //cria um novo array com elementos que estão a partir do elemento 2
console.log(array2)

const array3 = array.splice(1, 4) //o índice 4 não entra
console.log(array2)

