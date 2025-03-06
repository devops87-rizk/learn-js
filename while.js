// While Loop

let num = 0;
while (num < 11 ) {
    console.log(num);
    num++;
}

const password = 'Pass123';

let guess = prompt('enter the password')
while (guess !== password) {
    guess = prompt('enter the password');
}

alert('congrats! the password is correct');