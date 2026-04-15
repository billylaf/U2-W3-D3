const booksURL = "https://striveschool-api.herokuapp.com/books"
const getBooks = function () {
  fetch(booksURL)
    .then((response) => {
      console.log("RESPONSE", response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("risposta non corretta dal server", response.status)
      }
    })
    .then((data) => {
      const card = document.getElementById("books")
      data.forEach((utente) => {
        const 
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.innerText = utente.name // prendo solo il nome
        ul.appendChild(li)
      })
    })
    .catch((err) => {
      console.log("ERRORE NELLA FETCH", err)
    })
}

getBooks()
