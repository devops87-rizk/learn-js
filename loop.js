
// Loop
// for (let i = 1; i <= 100; i++) {
//     console.log("I'm in the Loop")
//     console.log(i)
// }

// Loop with Array
// const animals = ['Cat', 'Dog', 'Fish', 'Koala'];
// animals.push('Deer')

// for (let i=0; i<animals.length; i++) {
//     console.log(i, animals[i])
// }

// Nested Loop
// let str = 'LOL';
// for (let i=0; i<=4; i++) {
//     console.log("Outer:", i);
//     for (let j=0; j<str.length; j++) {
//         console.log('  Inner:', str[j]);
//     }
// }


const studentRow = [
    ['Olivia', 'Liam', 'Emma', 'Noah'],
    ['Amelia', 'Oliver', 'Ava', 'Elijah'],
    ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
];

for(let i = 0; i < studentRow.length; i++) {
    const row = studentRow[i];
    console.log(`Seat Row #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(`    ${row[j]}`);
    }
}