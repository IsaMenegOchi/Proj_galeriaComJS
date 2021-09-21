"use strict"

const imagens = [
    "./img/aguia_e_castor.jpg",
    "./img/foca.jpg",
    "./img/gaxinins.jpg",
    "./img/lontra.jpg",
    "./img/macacos.jpg",
    "./img/opera_peixes.jpg",
    "./img/pelicano.jpg",
    "./img/pombo_e_folha.jpg",
]

//*filter, reduce e map - retornam um novo array
//*foreach apenas percorre no array, não retorna nada

const criarItem = (urlImage) => {
    const container = document.querySelector(".galeria-container")
    
    /* 
    ! O problema de fazermos do modo abaixo é que não modificamos os objetos
    ! mas sim o proprio html, o que consome memoria e processador, ficando pesado par ao cliente
    container.innerHTML += `
    <a href="${urlImage}" class="galeria-itens">
                <img src="${urlImage}" alt="">
    </a>
    `
    */

    //*ele esta na memória, ou seja, é uma variave, e não modifica o documento diretamente (e cria o "a")
    const novoLink = document.createElement("a")
    novoLink.href = urlImage
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImage}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()