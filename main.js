console.log("send")
//buiding Dom 
const outputContainer = document.getElementById("container")
const output = document.getElementById("donOutput")
//creating input field favorite things 
const thingField = document.createElement("fieldset")
const things = document.createElement("input")
thingField.appendChild(things)
//creating input field favorite locations
const locationField = document.createElement("fieldset")
const locations = document.createElement("input")
locationField.appendChild(locations)
//creating submit button
const addButton = document.createElement("button")
addButton.textContent = "Submit"

donOutput.appendChild(thingField)
donOutput.appendChild(locationField)
donOutput.appendChild(addButton)

//creating event listener function
addButton.addEventListener("click", function(event){
    console.log(things.value, locations.value)
    donOutput.innerHTML =`<h1>I can purchase ${things.value} at ${locations.value}.</h1>`
})