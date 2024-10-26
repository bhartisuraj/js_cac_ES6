class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    get email() {
      return this._email.toUpperCase();
    }
  
    set email(value) {
      this._email = value;
    }
  
    get password() {
      return `${this._password}suraj`;
    }
  
    set password(value) {
      this._password = value;
    }
  }
  
  const raj = new User("s@suraj.ai", "abc");
  console.log(raj);
  
  console.log("***************");
  console.log(raj.password);
  console.log(raj._password);
  
  console.log("***************");
  console.log(raj.email);
  console.log(raj._email);