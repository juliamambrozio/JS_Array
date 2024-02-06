const array = ['Ana', 'Gui', 'Júlia']
console.log(array[0])

array[3] = 'Jão'
console.log(array)

array.push('Gustavo')
console.log(array)

array[9] = 'Miguel' 
console.log(array)
console.log(array.length) //ele inclui todos os elementos, até o intervalo deles
array.sort()
console.log(array) //ordem alfabética

delete array[9] //ele não reordena a ordem
console.log(array[9])
console.log(array)

let array2 =  ['Ana', 'Gui', 'Júlia']

array2.splice(1, 1) //apaga o elemento que você quer (primeiro o índice e depois quantos a partir dele vocÊ quer apagar)
console.log(array2)
array2.splice(1, 0, 'Gui', 'Gustavo') //apaga (igual o exemplo acima, caso não queira apagar, é só colocar 0) e depois adiciona
console.log(array2)