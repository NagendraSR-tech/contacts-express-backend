const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        // console.log( 'MongoDB database connected', connect.connection.host, connect.connection.name);
        console.log(`MongoDB connected: ${connect.connection.host} / ${connect.connection.name}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error)
        process.exit(1)
    }
}

module.exports = connectDb;
