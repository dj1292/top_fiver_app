document.addEventListener("DOMContentLoaded", function() {
  // fetchUsers()
loginButton()
formButton()
editButton()
deleteButton()
sort()
displayCards()
// editThisCard()
})

function loginButton() {
  const loginButton = document.querySelector("#login-button")
  loginButton.addEventListener("click", loginForm)
}

function formButton(){
  const cardButton = document.querySelector("#createCard")
  cardButton.addEventListener("click", createForm)
}

function loginForm() {
  const login = document.querySelector("#loginForm")
  login.hidden = false
  login.addEventListener("submit", submitLogin)
}

function submitLogin(event){
  event.preventDefault()
  const postRes = fetch("http://localhost:3000/api/v1/users", {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: {
        name: event.target.name.value,
        password: event.target.password.value
      }
    })
  }).then(res => res.json())
  .then(data => renderUser(data))
  event.target.reset()
  event.target.hidden = true

  const content = document.querySelector("#large_area")
  // console.log(content)
  content.hidden = false

  const loginButton = document.querySelector("#login-button")
  loginButton.hidden = true
  
  // console.log(event.target.name.value, event.target.age.value, event.target.location.value, event.target.bio.value)
  // debugger
}

function renderUser(data) {
  // debugger
  const profileName = document.querySelector("#data-name")
  profileName.innerText = data.name
  localStorage.setItem = data.name
  const readName = localStorage.getItem(`${data.name}`)

  // const profileAge = document.querySelector("#data-age")
  // profileAge.innerText = data.age

  // const profileLocation = document.querySelector("#data-location")
  // profileLocation.innerText = data.location

  // const profileBio = document.querySelector("#data-bio")
  // profileBio.innerText = data.bio
}



function createForm() {
  const main = document.querySelector("#main")
  const cardForm = document.createElement("FORM")
  cardForm.className = "card"
  cardForm.setAttribute("id", "card-form")
  main.appendChild(cardForm)

  // Create name label and input 
  const nameLabel = document.createElement('label')
  nameLabel.innerText = "Name"
  cardForm.appendChild(nameLabel)
  const nameInput = document.createElement("input")
  nameInput.setAttribute("id", "name")
  cardForm.appendChild(nameInput)

  //break
  const cardBreak = document.createElement("br")
  cardForm.appendChild(cardBreak)

  // Create category label and input 
  const categoryLabel = document.createElement("label")
  categoryLabel.innerText = "Category"
  cardForm.appendChild(categoryLabel)
  const categoryInput = document.createElement("input")
  categoryInput.setAttribute("id", "category")
  cardForm.appendChild(categoryInput)

  // break
  const cardBreak1 = document.createElement("br")
  cardForm.appendChild(cardBreak1)

  // The start of Top 5 entries
  const fivefavs = document.createElement("p")
  fivefavs.innerText = "Enter Favorites Here"
  cardForm.appendChild(fivefavs)

  // break
  const cardBreak2 = document.createElement("br")
  cardForm.appendChild(cardBreak2)

  // Top 5 first entry and label
  const entry1 = document.createElement('label')
  entry1.innerText = "1"
  cardForm.appendChild(entry1)
  const firstEntry = document.createElement('input')
  firstEntry.setAttribute("id", "firstEntry")
  cardForm.appendChild(firstEntry)

  // break
  const cardBreak3 = document.createElement("br")
  cardForm.appendChild(cardBreak3)

  // Top 5 second entry and label
  const entry2 = document.createElement('label')
  entry2.innerText = "2"
  cardForm.appendChild(entry2)
  const secondEntry = document.createElement('input')
  secondEntry.setAttribute("id", "secondEntry")
  cardForm.appendChild(secondEntry)

  // break
  const cardBreak4 = document.createElement("br")
  cardForm.appendChild(cardBreak4)

  // Top 5 third entry and label
  const entry3 = document.createElement('label')
  entry3.innerText = "3"
  cardForm.appendChild(entry3)
  const thirdEntry = document.createElement('input')
  thirdEntry.setAttribute("id", "thirdEntry")
  cardForm.appendChild(thirdEntry)

  // break
  const cardBreak5 = document.createElement("br")
  cardForm.appendChild(cardBreak5)

  // Top 5 fourth entry and label
  const entry4 = document.createElement('label')
  entry4.innerText = "4"
  cardForm.appendChild(entry4)
  const fourthEntry = document.createElement('input')
  fourthEntry.setAttribute("id", "fourthEntry")
  cardForm.appendChild(fourthEntry)

  // break
  const cardBreak6 = document.createElement("br")
  cardForm.appendChild(cardBreak6)

  // Top 5 fifth entry and label
  const entry5 = document.createElement('label')
  entry5.innerText = "5"
  cardForm.appendChild(entry5)
  const fifthEntry = document.createElement('input')
  fifthEntry.setAttribute("id", "fifthEntry")
  cardForm.appendChild(fifthEntry)

  //break
  const cardBreakAgain = document.createElement('br')
  cardForm.appendChild(cardBreakAgain)

  //Submit event listener and button
  const submit = document.createElement("Button")
  submit.innerText = "Submit Card"
  cardForm.appendChild(submit)
  cardForm.addEventListener("submit", submitForm)

  //like counter

}

function submitForm(event) {
  event.preventDefault()
  const postResponse = fetch("http://localhost:3000/api/v1/cards", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      card: {
      user_id: 1,
      name: event.target.name.value, 
      category: event.target.category.value,
      firstEntry: event.target.firstEntry.value,
      secondEntry: event.target.secondEntry.value,
      thirdEntry: event.target.thirdEntry.value,
      fourthEntry: event.target.fourthEntry.value,
      fifthEntry: event.target.fifthEntry.value
    } 
  })
  }).then(res => res.json())
  .then(data => renderCard(data))
  event.target.reset()

  const hideForm = document.querySelector("#card-form")
  hideForm.hidden = true
}

function renderCard(data) {
  // debugger

  // class Card {
  //   constructor(name, category, firstEntry, secondEntry, thirdEntry, fourthEntry, fifthEntry ) {
  //     this.name = name 
  //     this.category = category
  //     this.firstEntry = firstEntry
  //     this.secondEntry = secondEntry
  //     this.thirdEntry = thirdEntry
  //     this.fourthEntry = fourthEntry
  //     this.fifthEntry = fifthEntry
  //   }
  //   showInfo() {
  //     console.log(`${data.name}, ${data.category}, ${data.firstEntry}, ${data.secondEntry}, ${data.thirdEntry}, ${data.fourthEntry}, ${data.fifthEntry}`) 
  //   }
  //   console.log(this)
  //   // const newCard = new Card(`${this.data}, ${this.data}, ${this.data}, ${this.data}, ${this.data}, ${this.data}, ${this.data}`) 
  //   newCard.showInfo()
  // }



  // const cardName = document.querySelector("#card-name")
  // cardName.innerText = data.name

  // const cardCategory = document.querySelector("#card-cat")
  // cardCategory.innerText = data.category

  // const cardEntry1 = document.querySelector("#first-entry")
  // cardEntry1.innerText = data.firstEntry

  // const cardEntry2= document.querySelector("#second-entry")
  // cardEntry2.innerText = data.secondEntry

  // const cardEntry3= document.querySelector("#third-entry")
  // cardEntry3.innerText = data.thirdEntry

  // const cardEntry4 = document.querySelector("#fourth-entry")
  // cardEntry4.innerText = data.fourthEntry

  // const cardEntry5 = document.querySelector("#fifth-entry")
  // cardEntry5.innerText = data.fifthEntry

  const deleteB = document.querySelector("#deleteButton")
  deleteB.dataset.cardId = data.id
  console.log(deleteB)

  const editB = document.querySelector("#editButton")
  editB.dataset.cardId = data.id
  console.log(editB)
}

function displayCards() {
  fetch(`http://localhost:3000/api/v1/cards`, {
    method: 'GET',
  }).then(res => res.json())
  .then(data => {
    data.forEach(card => {
      const newCard = new Card(`${card.name}, ${card.category}, ${card.firstEntry}, ${card.secondEntry}, ${card.thirdEntry}, ${card.fourthEntry}, ${card.fifthEntry}`)
      document.getElementById('allCards').innerHTML += newCard.showCard()
    });
    })
  }


// function editThisCard() {
//   const thisCard = document.getElementById('#cardEditButton')
//     thisCard.addEventListener('click', cardEditButton)
// }

// function cardEditButton(event) {
//   console.log("Im in cardEdit yeet!")
//   const cardId = event.target.dataset.cardId 
//   console.log(event.target.dataset)
//   console.log(`http://localhost:3000/api/v1/cards/${cardId}`)
//   fetch(`http://localhost:3000/api/v1/cards/${cardId}`)
//   .then(res => res.json())
//   .then(data => {
//     // debugger
//     createEditForm(data)

//   })
//   // .then(console.log)
// }

// function cardDeleteButton() {
//   const deleteButton = document.getElementById("#cardDeleteButton")
//   // console.log(deleteButton)
//   deleteButton.addEventListener("click", cardDelete)
// }

// function cardDelete(event) {
//   // debugger
//   const cardId = event.target.parentNode.dataset.cardId
//   console.log(event.target.parentNode.dataset)
// // debugger
//   fetch(`http://localhost:3000/api/v1/cards/${cardId}`,{
//     method: 'DELETE',
//   }).then(res => res.json())
//   .then(data =>  {
//   console.log(data)
//   })
// }

function editButton() {
  const edit_button = document.querySelector("#editButton")
  edit_button.addEventListener("click", editCard)
}

function editCard(event) {
  console.log("Im in editCard yeet!")
  const cardId = event.target.dataset.cardId 
  console.log(event.target.dataset)
  console.log(`http://localhost:3000/api/v1/cards/${cardId}`)
  fetch(`http://localhost:3000/api/v1/cards/${cardId}`)
  .then(res => res.json())
  .then(data => {
    // debugger
    createEditForm(data)

  })
  // .then(console.log)
}

function createEditForm(data = {}) {
  console.log("Line 259: ", data)
  console.log("We are editing the form yay!")
  // debugger
  const main = document.querySelector("#main")
  const cardForm = document.createElement("FORM")
  // cardForm.dataset.cardId = data.id
  cardForm.setAttribute("data-id", data.id)
  // console.log("Line 275: ", cardForm)
  cardForm.className = "card"
  cardForm.setAttribute("id", "edit-card-form")
  main.appendChild(cardForm)

  // Create name label and input 
  const nameLabel = document.createElement('label')
  nameLabel.innerText = "Name"
  cardForm.appendChild(nameLabel)
  const nameInput = document.createElement("input")
  nameInput.setAttribute("id", "name")
  cardForm.appendChild(nameInput)
  nameInput.value = data.name
  // debugger

  //break
  const cardBreak = document.createElement("br")
  cardForm.appendChild(cardBreak)

  // Create category label and input 
  const categoryLabel = document.createElement("label")
  categoryLabel.innerText = "Category"
  cardForm.appendChild(categoryLabel)
  const categoryInput = document.createElement("input")
  categoryInput.setAttribute("id", "category")
  cardForm.appendChild(categoryInput)
  categoryInput.value = data.category

  // break
  const cardBreak1 = document.createElement("br")
  cardForm.appendChild(cardBreak1)

  // The start of Top 5 entries
  const fivefavs = document.createElement("p")
  fivefavs.innerText = "Enter Favorites Here"
  cardForm.appendChild(fivefavs)

  // break
  const cardBreak2 = document.createElement("br")
  cardForm.appendChild(cardBreak2)

  // Top 5 first entry and label
  const entry1 = document.createElement('label')
  entry1.innerText = "1"
  cardForm.appendChild(entry1)
  const firstEntry = document.createElement('input')
  firstEntry.setAttribute("id", "firstEntry")
  cardForm.appendChild(firstEntry)
  firstEntry.value = data.firstEntry

  // break
  const cardBreak3 = document.createElement("br")
  cardForm.appendChild(cardBreak3)

  // Top 5 second entry and label
  const entry2 = document.createElement('label')
  entry2.innerText = "2"
  cardForm.appendChild(entry2)
  const secondEntry = document.createElement('input')
  secondEntry.setAttribute("id", "secondEntry")
  cardForm.appendChild(secondEntry)
  secondEntry.value = data.secondEntry

  // break
  const cardBreak4 = document.createElement("br")
  cardForm.appendChild(cardBreak4)

  // Top 5 third entry and label
  const entry3 = document.createElement('label')
  entry3.innerText = "3"
  cardForm.appendChild(entry3)
  const thirdEntry = document.createElement('input')
  thirdEntry.setAttribute("id", "thirdEntry")
  cardForm.appendChild(thirdEntry)
  thirdEntry.value = data.thirdEntry

  // break
  const cardBreak5 = document.createElement("br")
  cardForm.appendChild(cardBreak5)

  // Top 5 fourth entry and label
  const entry4 = document.createElement('label')
  entry4.innerText = "4"
  cardForm.appendChild(entry4)
  const fourthEntry = document.createElement('input')
  fourthEntry.setAttribute("id", "fourthEntry")
  cardForm.appendChild(fourthEntry)
  fourthEntry.value = data.fourthEntry

  // break
  const cardBreak6 = document.createElement("br")
  cardForm.appendChild(cardBreak6)

  // Top 5 fifth entry and label
  const entry5 = document.createElement('label')
  entry5.innerText = "5"
  cardForm.appendChild(entry5)
  const fifthEntry = document.createElement('input')
  fifthEntry.setAttribute("id", "fifthEntry")
  cardForm.appendChild(fifthEntry)
  fifthEntry.value = data.fifthEntry

  //break
  const cardBreakAgain = document.createElement('br')
  cardForm.appendChild(cardBreakAgain)

    //Submit event listener and button
    const submit = document.createElement("Button")
    submit.innerText = "Submit Card"
    cardForm.appendChild(submit)
    cardForm.addEventListener("submit", submitNewForm)
}

function submitNewForm(event) {
  event.preventDefault()
  console.log("The edited form was submitted! Its lit!")

  const cardId = event.target.dataset.id
  console.log(event.target.dataset)

  fetch(`http://localhost:3000/api/v1/cards/${cardId}`, {
    method: 'PATCH',
    headers: {"Content-Type": 'application/json'
  },
    body: JSON.stringify({
      card: {
        name: event.target.name.value,
        category: event.target.category.value,
        firstEntry: event.target.firstEntry.value,
        secondEntry: event.target.secondEntry.value,
        thirdEntry: event.target.thirdEntry.value,
        fourthEntry: event.target.fourthEntry.value,
        fifthEntry: event.target.fifthEntry.value
      }
    })
  }).then(res => res.json())
  .then(data => renderEditCard(data), console.log("Card submitted:"))

  event.target.reset()
  

  const hideForm = document.querySelector("#edit-card-form")
  hideForm.hidden = true
}

function renderEditCard(data) {
  const cardName = document.querySelector("#card-name")
  cardName.innerText = data.name

  const cardCategory = document.querySelector("#card-cat")
  cardCategory.innerText = data.category

  const cardEntry1 = document.querySelector("#first-entry")
  cardEntry1.innerText = data.firstEntry

  const cardEntry2= document.querySelector("#second-entry")
  cardEntry2.innerText = data.secondEntry

  const cardEntry3= document.querySelector("#third-entry")
  cardEntry3.innerText = data.thirdEntry

  const cardEntry4 = document.querySelector("#fourth-entry")
  cardEntry4.innerText = data.fourthEntry

  const cardEntry5 = document.querySelector("#fifth-entry")
  cardEntry5.innerText = data.fifthEntry

  const deleteB = document.querySelector("#deleteButton")
  deleteB.dataset.cardId = data.id
  console.log(deleteB)

  const editB = document.querySelector("#editButton")
  editB.dataset.cardId = data.id
  console.log(editB)
}

function deleteButton() {
  const deleteButton = document.querySelector("#deleteButton")
  // console.log(deleteButton)
  deleteButton.addEventListener("click", deleteCard)
}

function deleteCard(event) {
  // debugger
  const cardId = event.target.parentNode.dataset.cardId
  console.log(event.target.parentNode.dataset)
// debugger
  fetch(`http://localhost:3000/api/v1/cards/${cardId}`,{
    method: 'DELETE',
  }).then(res => res.json())
  .then(data =>  {
  console.log(data)
  })
}

function sort() {
  const sortButton = document.querySelector('#Sort')
  sortButton.addEventListener("click", sortCards)
}

function sortCards(event) {
  console.log(event)
  fetch(`http://localhost:3000/api/v1/cards`, {
    method: 'GET',
  }).then(res => res.json())
  .then(data => {
    data.sort(function(a, b) {
      var cardA = a.name.toUpperCase(); // ignore upper and lowercase
      var cardB = b.name.toUpperCase(); // ignore upper and lowercase
      if (cardA < cardB) {
        return -1;
      }
      if (cardA > cardB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    console.log(data)
    document.getElementById('allCards').innerHTML = data.map(card => 
      `<div id=sortedCards>
      <ul>
        <div>Name: ${card.name}</div>
        <div>Category: ${card.category}</div>
        <div>1: ${card.firstEntry}</div>
        <div>2: ${card.secondEntry}</div>
        <div>3: ${card.thirdEntry}</div>
        <div>4: ${card.fourthEntry}</div>
        <div>5: ${card.fifthEntry}</div>
        </ul>
        </div>`)
      })

      // Buttons to be rendered with each card, move into sortCards()
      // <Button id="cardEditButton"><b>Edit</b></Button>
      // <Button id="cardDeleteButton"><b>Delete</b></Button>
    }


