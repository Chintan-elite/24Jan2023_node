
// var k = process.argv[0]
// var y = process.argv[1]
// var a = process.argv[2]
// var b = process.argv[3]
// console.log(k);
// console.log(y);
// console.log(a + " " + b);

const yargs = require("yargs")

yargs.command({

    command: "add",
    builder: {
        name: {
            type: String
        },
        email: {
            type: String,
            required: true
        }
    },
    handler: function (argv) {
        // console.log("add calling");
        console.log(argv.name + " " + argv.email);
    }
})

yargs.command({

    command: "remove",
    builder: {
        fname: {
            type: String
        }
    },
    handler: function (argv) {
        console.log(argv.fname);
    }
})


yargs.argv







