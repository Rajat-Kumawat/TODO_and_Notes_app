const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected!`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const todoSchema = new mongoose.Schema({
    Title: String,
    Description: String,
    EndDate: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: Boolean,
        default: false
    }
})
const todo = mongoose.model('todo', todoSchema);

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})
const user = mongoose.model('user', userSchema);

module.exports = {
    todo, user, connectDB
}