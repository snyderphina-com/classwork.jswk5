

// class Product {
//   constructor(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }

//   sell(quantity) {
//     if (quantity <= this.stock) {
//       this.stock -= quantity;
//       console.log("Sale successful");
//     } else {
//       console.log(`Not enough !, only ${this.stock} stock remains !`);
//     }
//   }
// }

// const sugar = new Product("Sugar", 100, 50);
// sugar.sell(5);

// const salt=new Product('salt',50,10);
// salt.sell(51);





// let name = prompt('What is your name: ');
// let age = Number(prompt('Enter your age: '));
// let course = prompt('Your course? ').toLowerCase();


// class student{
// constructor(name,age,course){
// this.name=name;
// this.age=age;
// this.course=course;
// }

// checkAge(){
// if(this.age<18){
//     return 'You are too young'
// }

// else{
//     console.log('You Qualify');
    
// }
// }
// }

// const student1= new student(name,age,course);
// student1.checkAge();



// const prompt = require('prompt-sync')();

// let username = prompt("Enter username: ");
// let password = prompt("Enter password: ");
// let id = Number(prompt("Enter user ID: "));

// class User {
//     constructor(username, password, id) {
//         this.username = username;
//         this.password = password;
//         this.id = id;
//     }

//     displayUser() {
//         console.log("Username:", this.username);
//         console.log("Password:", this.password);
//         console.log("ID:", this.id);
//     }
// }

// const user1 = new User(username, password, id);

// user1.displayUser();






//ENCAPSULATION00000000000000000000000000000000000000000000000000000000000000000000000000000000

// class User {
//     #password;  // private property

//     constructor(username, password) {
//         this.username = username;
//         this.#password = password;
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Access granted");
//         } else {
//             console.log("Wrong password");
//         }
//     }
// }

// const user1 = new User("Snyder", "1234");

// user1.checkPassword("1234");


// class BankAccount {
//     constructor(balance) {
//         this._balance = balance;
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(amount) {
//         if (amount < 0) {
//             console.log("Invalid amount");
//         } else {
//             this._balance = amount;
//         }
//     }
// }

// const acc = new BankAccount(1000);

// console.log(acc.balance);

// acc.balance = -500;
// acc.balance = 2000;

// console.log(acc.balance);



// const prompt = require('prompt-sync')();

// // Class with encapsulation using getters and setters
// class User {
//     constructor(username, password) {
//         this.username = username;
//         this._password = password; // private-ish property
//     }

//     // Getter (read password safely)
//     get password() {
//         return "********"; // hide actual password
//     }

//     // Setter (validate password before changing)
//     set password(newPassword) {
//         if (newPassword.length < 6) {
//             console.log("Password too short! Must be at least 6 characters.");
//         } else {
//             this._password = newPassword;
//             console.log("Password updated successfully.");
//         }
//     }

//     display() {
//         console.log("Username:", this.username);
//         console.log("Password:", this.password);
//     }
// }

// // Prompt user input
// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");

// // Create a User object
// const user1 = new User(username, password);

// // Show user info (password hidden)
// user1.display();

// // Prompt to update password
// let newPass = prompt("Enter a new password to update: ");
// user1.password = newPass;

// // Show updated info
// user1.display();




//////////////////////////////////////////////////////////////////
const prompt = require('prompt-sync')();

// BankAccount class with private fields using # and getters/setters
class BankAccount {
    #balance;   // private field for balance
    #password;  // private field for password

    constructor(username, password, balance) {
        this.username = username;  // public field
        this.#password = password; // store password privately
        this.#balance = balance;   // store balance privately
    }

    // Getter to check balance (password required)
    get balance() {
        const inputPass = prompt("Enter password to check balance: ");
        if (inputPass === this.#password) {
            return this.#balance;
        } else {
            console.log("Wrong password! Cannot access balance.");
            return null;
        }
    }

    // Deposit money (setter-like method)
    deposit(amount) {
        const inputPass = prompt("Enter password to deposit: ");
        if (inputPass === this.#password) {
            if (amount > 0) {
                this.#balance += amount;
                console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        } else {
            console.log("Wrong password! Deposit failed.");
        }
    }

    // Withdraw money (setter-like method)
    withdraw(amount) {
        const inputPass = prompt("Enter password to withdraw: ");
        if (inputPass === this.#password) {
            if (amount > 0 && amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
            } else {
                console.log("Invalid withdrawal amount.");
            }
        } else {
            console.log("Wrong password! Withdrawal failed.");
        }
    }
}

// --- Main program ---
let username = prompt("Enter your username: ");
let password = prompt("Set your account password: ");
let balance = Number(prompt("Enter initial balance: "));

const account = new BankAccount(username, password, balance);

console.log("\n--- Account Created ---");

// Check balance
let currentBalance = account.balance;
if (currentBalance !== null) {
    console.log(`Current Balance: ${currentBalance}`);
}

// Deposit
let depositAmount = Number(prompt("\nEnter amount to deposit: "));
account.deposit(depositAmount);

// Withdraw
let withdrawAmount = Number(prompt("\nEnter amount to withdraw: "));
account.withdraw(withdrawAmount);

// Final balance check
let finalBalance = account.balance;
if (finalBalance !== null) {
    console.log(`Final Balance: ${finalBalance}`);
}