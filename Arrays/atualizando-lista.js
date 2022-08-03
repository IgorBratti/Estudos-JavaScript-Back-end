                        //0     //1     2
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// primeiro indice sera de onde ira iniciar a alteração
// segundo indice qtd de remoção de indice
// terceiro opcional para adicionar algo no lugar

listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`) //Lista de chamada: João,Ana,Rodrigo,Caio,Lara,Marjorie,Leo