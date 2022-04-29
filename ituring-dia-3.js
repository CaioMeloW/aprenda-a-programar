let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true}
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true}
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}


if (produtoA.internacional == true) {
    let valorImpostos = produtoA.valor * 1.2
    console.log(produtoA.nome)
    console.log("é internacional e custa")
    console.log(valorImpostos)
} else {
    let valorImpostos = produtoA.valor * 1.12
   console.log(produtoA.nome)
   console.log("é nacional e custa:")
   console.log(valorImpostos)
}


//sofri com uma vírgula, mas deu tudo certo!!!
