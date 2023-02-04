

// const student = (a, b) => {
//     var std = [10, 20, 30, 40, 50, 60]
//     b(std[a])
// }

// const stDetail = (a, b) => {
//     b("name of rollno " + a + " is vivek ")
// }

// student(1, (b) => {
//     stDetail(b, (k) => {
//         console.log(k);
//     })
// })

const student = (a) => {
    var std = [10, 20, 30, 40, 50, 60]
    return new Promise((resolve, reject) => {
        return resolve(std[a])
        //return reject("fun1 err")
    })
}

const stDetail = (a) => {
    return new Promise((resolve, reject) => {
        return resolve(`name of rollno ${a} is vivek `)
        // return reject("fun 2 eerr")
    })

}


// student(2).then(result => {
//     console.log(result);
//     return stDetail(result)
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// const call = async () => {
//     try {
//         const result = await student(2)
//         console.log(result);
//         const data = await stDetail(result)
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// call()

// var a = 10;
// var b = 50;

// console.log("sum of " + a + " and  " + b + " is " + (a + b));
// console.log(`sum of ${a} and ${b} is ${a + b}`);