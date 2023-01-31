
// function sum(a, b, c) {
//     var r = a + b;
//     var m = a * b;
//     c(r, m)
// }

// sum(10, 20, (r, m) => {
//     console.log(r + " " + m);
// })



const square = (s, callback) => {
    callback(s * s)
}

const cube = (q, callback) => {
    callback(q * q * q)
}

square(10, (square) => {
    console.log(square);
    cube(square, (c) => {
        console.log(c);
        
    })
})




