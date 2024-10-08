class User {
    constructor (username){
             this.username = username
    }

    logMe(){
             console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
             super(username)
             // this.username = username
             this.email = email
             this.password = password
    }

    addCourse(){
             console.log(`A new course was added by ${this.username}`);
    }
}

// const chai = new Teacher("suraj", "chai@teacher.com", "123")
// chai.addCourse() // Chai has access to addCourse() because it was called by Teacher
// chai.logMe() // Chai has access to logMe() because it was called by Teacher

const masalaChai = new User("masalaChai")
// masalaChai.addCourse() // Doesnt have access to addCourse() because it was called by User
// masalaChai.logMe() // Chai has access to logMe() because it was called by User

// console.log(chai === masalaChai); // False
// console.log(chai === Teacher); // False

// console.log(chai instanceof User); // True
// console.log(chai instanceof Teacher); // True