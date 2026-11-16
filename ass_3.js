//=============================================             1             ============================================
let num=15
// if (num % 3 == 0) {
//     console.log("Number is divisible by 3");
// }
// else if (num % 5 == 0) {
//     console.log("Number is divisible by 5");
// }
if (num % 3 == 0 && num % 5 == 0) {
    console.log("Number is divisible by 3 and 5");
}
else {
    console.log("Number is not divisible by 3 and 5");
}

//=============================================             2             ============================================

let maths = 15;
let science = 20;

if (maths >= 35 || science >= 35) {
    console.log("Student passed in either subject");
}
else {
    console.log("Student failed in both subjects");
}

//=============================================             3             ============================================

let username1 = 'admin';
let password = '12345';
if (username1 == 'admin' && password == '12345') {
    console.log("Login successful");
}
else {
    console.log("Invalid username or password");
}

// =============================================             4             ============================================

let username = "manaer";
if (username == "admin" || username == "manager") {
    console.log("Valid username");
}
else {
    console.log("Invalid username");
}

//=============================================             5             ============================================

let age = 65;
if (age >= 60) {
    console.log("Eligible for senior citizen discount");
}
else {
    console.log("Not eligible for senior citizen discount");
}