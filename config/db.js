// db.js

const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/inshare');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Could not connect to MongoDB');
    }
}

module.exports = connectToMongoDB;
