const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        const connected = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb: ${connected.connection.host}`)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = connectDatabase 