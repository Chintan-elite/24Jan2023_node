const yargs = require("yargs")
const file = require("./file")
yargs.command({
    command: "create",
    builder: {
        name: {
            type: String
        },
        desc: {
            type: String
        },
        date: {
            type: Date,
            default: new Date()
        }
    },
    handler: function (argv) {

        const data = {
            name: argv.name,
            desc: argv.desc,
            date: argv.date
        }
        file.createfile(data)
    }
})

yargs.command({
    command: "view",
    handler: function (argv) {
        file.viewfile()
    }
})

yargs.argv