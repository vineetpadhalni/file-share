require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false // Set to false, as `true` is deprecated
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    });

    connection.on('error', (err) => {
        console.error('Connection failed ☹️☹️☹️☹️', err); // Log the error
    });

    // No need to catch here, since once('open') doesn't return a promise with catch

    connection.once('open', () => {
        console.log('Connection established'); // This is executed when connection is open
    });

    connection.once('disconnected', () => {
        console.log('Database disconnected');
    });

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
}

module.exports = connectDB;
