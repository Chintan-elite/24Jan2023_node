const { ALL } = require("dns");
const fs = require("fs")


const createFile = (data) => {

    const alldata = viewData();

    const duplicate = alldata.find(ele => {
        return ele.email == data.email
    })

    if (duplicate) {
        console.log("email alredy exist !!!");
        return;
    }
    alldata.push(data)
    const data1 = JSON.stringify(alldata)
    fs.writeFile("data.json", data1, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("file created");
    })

}

const viewFile = () => {
    const data = viewData();
    console.log(data);
}


const viewByName = (name) => {
    const alldata = viewData();
    const duplicate = alldata.find(ele => {
        return ele.name == name
    })
    if (duplicate) {
        console.log(duplicate);
    }
    else {
        console.log("name not found !!!");
    }
}

const removedata = (name) => {
    const alldata = viewData();
    const newdata = alldata.filter(ele => {
        return ele.name != name
    })

    fs.writeFile("data.json", JSON.stringify(newdata), (err) => {
        console.log("data deleted");
    })


}

const viewData = () => {

    try {
        const data = fs.readFileSync("data.json", "utf-8")
        if (data) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    } catch (error) {
        return [];
    }


}

module.exports = { createFile, viewFile, viewByName, removedata }