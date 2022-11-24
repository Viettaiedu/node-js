const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/SQL_dev');

        console.log("Connect successfully")
    }catch(e) {
        console.log("Connect error")
    }
}

module.exports = { connect};