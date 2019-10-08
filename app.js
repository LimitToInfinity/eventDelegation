const ul = document.querySelector("ul")

ul.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove()
    killEmAll(event.target.parentNode.dataset.pokemonId)
    }
})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(pikachu => {
        console.log(pikachu.id, pikachu.name)
        const $li = document.createElement("li")
        $li.dataset.pokemonId = pikachu.id
        $li.innerHTML = `
            ${pikachu.name} <button>DELETE</button>
        `
        ul.appendChild($li)
    })

function killEmAll(id){
    console.log(id)
//     return fetch(`http://localhost3000/${value}`, {
//         method: "DELETE"
//     })
}