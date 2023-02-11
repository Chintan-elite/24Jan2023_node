const fs = require("fs")

const createfile = (data) => {
    const newData = JSON.stringify(data)
    fs.writeFile("task.json", newData, (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("Data inserted in file");
    })
}

const viewfile = () => {
    const alldata = viewdata()
    console.log(alldata);
}


const viewdata = () => {

    try {
        const data = fs.readFileSync("task.json", "utf-8")
        if (data) {
            return JSON.parse(data)
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }

}

module.exports = { createfile, viewfile }