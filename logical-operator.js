// Operator Logic
// 1. And (&&)

// let age = 21;
// let gender = 'male'

// if (gender === 'male' && age >= 19) {
//     console.log('Legal')
// }   else {
//     console.log('Not legal')
// }

// const password = prompt('Make your password');

// if (password.length >= '6' && password.indexOf(' ') === -1) {
//     console.log('Good Password')
// }   else {
//     console.log('Make Again')
// }

// 2. Or (||)
// let age = 21;

// if (age === 18 || age === 20) {
//     console.log('Congratulation young man')
// }   else {
//     console.log('Keep going')
// }

// const rolePlay = prompt('Type of User')

// if (rolePlay === 'Admin' || rolePlay === 'SPV') {
//     console.log('Succesful')
// }   else {
//     console.log("You're Not Allowed")
// }

// Not (!)
// const rolePlay = prompt('Type of User')

// if (rolePlay !== 'Admin') {
//     console.log("You're Not Allowed")
// }   else {
//     console.log('Succesful')
// }

// Switch
const age = prompt('Input Your Age');

switch (age) {
    case '18':
        console.log('Please Come in');
        break;
    case '17':
        console.log('Please Come in');
        break;
    case '1616':
        console.log('Please Come in');
        break;
    default:
        console.log('Do Not Allowed')
}
