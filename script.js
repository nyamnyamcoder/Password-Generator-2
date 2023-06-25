const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let hasClicked = false
let lengthEntered = false
let pass1copiedEl = document.getElementById("password1copied")
let pass2copiedEl = document.getElementById("password2copied")    
let passlength = 0

// trigger creation of new passwords
function triggerpassword() {

    if (hasClicked === false) {
        generatepassword1()
        generatepassword2()
    } else {
        password1 = ""
        password2 = ""
        generatepassword1()
        generatepassword2()
    }
}

// trigger creation of new passwords with 
// password length inputed by user
function passwordlen() {
    let preferred = prompt("Please enter a preferred password length in integer.")
    passlength = preferred
    lengthEntered = true
    generatepassword1()
    generatepassword2()
    // call triggerpassword() to recreate 2 new passwords of 
    // preferred length 
    triggerpassword()
}

// generate one password
function generatepassword1() {

    hasClicked = true

    if (lengthEntered === true ) {
        for (i = 0; i < passlength; i++) {
            let index = Math.floor(Math.random() * characters.length)
            password1 += characters[index]
    }} else {
        for (i = 0; i < 15; i++) {
            let index = Math.floor(Math.random() * characters.length)
            password1 += characters[index]
            }}

    return password1El.textContent = password1
}

// generate another password 

function generatepassword2() {

    hasClicked = true

    if (lengthEntered === true) {
        for (i = 0; i < passlength; i++) {
            let index = Math.floor(Math.random() * characters.length)
            password2 += characters[index]
    }} else {
        for (i = 0; i < 15; i++) {
            let index = Math.floor(Math.random() * characters.length)
            password2 += characters[index]
    }}

    return password2El.textContent  = password2
}


