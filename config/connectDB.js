const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected to DB 🌍')
    } catch (error) {
        console.error("Couldn't connect to DB ❌", error)
        process.exit(1)
    }
}

module.exports = connectDB;