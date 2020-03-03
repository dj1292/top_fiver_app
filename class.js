console.log("connected")

class Card {
  constructor(name, category, firstEntry, secondEntry, thirdEntry, fourthEntry, fifthEntry ) {
    this.name = name 
    this.category = category
    this.firstEntry = firstEntry
    this.secondEntry = secondEntry
    this.thirdEntry = thirdEntry
    this.fourthEntry = fourthEntry
    this.fifthEntry = fifthEntry
  }
  showInfo() {
    console.log(`${this.name}, ${this.category}, ${this.firstEntry}, ${this.secondEntry}, ${this.thirdEntry}, ${this.fourthEntry}, ${this.fifthEntry}`) 
  }
  showCard() {
  return `<div id="theCards">
        <ul>
        <div>Name: ${this.name}</div>
        <div>Category: ${this.category}</div>
        <li>1: ${this.firstEntry}</li>
        <li>2: ${this.secondEntry}</li>
        <li>3: ${this.thirdEntry}</li>
        <li>4: ${this.fourthEntry}</li>
        <li>5: ${this.fifthEntry}</li>
        <Button id="cardEditButton"><b>Edit</b></Button>
        <Button id="cardDeleteButton"><b>Delete</b></Button>
        </ul>
        </div>`
  }
}