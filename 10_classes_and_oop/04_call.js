function SetUsername(username){ // Creating one method where it stores username
    // Complex DB calls
    this.username = username
}

function createUser(username, email, password){ // Creating another method where it stores email an password
    
    SetUsername.call(this, username) // By .call(this, we connect current method with another one

    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);