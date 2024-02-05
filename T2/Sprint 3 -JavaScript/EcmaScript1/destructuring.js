// const camisalacoste = {
//     descricao: "Camisa Lacoste"
// ,   preco: 399.98,
//     marca: "Lacoste",
//     tamanho: "G",
//     cor: "Azul",
//     promo: false
// }

// const {descricao, preco, promo }= camisalacoste;

// console.log (`
//     Produto: ${descricao}
//     Preço: ${preco}
//     Promoção: ${promo ? "Sim" : "Não"}
// `)

const Evento = {
    titulo: "Festa dos Amigos Senai",
    dataEvento: "22/10/23",
    descricao: "Os Amigos do Senai bolaram uma festa bem legal, que pretende unir a todos em harmonia pelo 4 ano consecutivo...",
    presenca: true,
    comentario: "Que festança show que foi no ano passado - Organizador",
}

const {titulo, dataEvento, descricao, presenca, comentario}= Evento;

console.log (`
    Titulo: ${titulo}
    Data do Evento: ${dataEvento}
    Descrição: ${descricao}
    Presença: ${presenca ? "Presença Confirmada" : "Presença Negada"}
    Comentários Passados:  ${comentario}
`)

