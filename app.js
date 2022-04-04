
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardsContainer = document.querySelector(".user-cards")
const searchInput = document.querySelector("#search")
let coleccionUsuarios = []
searchInput.addEventListener("input", (ev) => {
    const value = ev.target.value.toLowerCase();

    coleccionUsuarios.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})
let listaUsuarios = []
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        coleccionUsuarios = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")

            const body = card.querySelector("[data-body]")
            header.innerText = user.name
            body.innerText = user.email
            userCardsContainer.appendChild(card)
            return { name: user.name, email: user.email, element: card }
        });
    });

