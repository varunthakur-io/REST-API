// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');

// Defining the user schema for MongoDB
const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String
        },
        job_title: {
            type: String
        }
    },
    {
        timestamps: true
    });

const User = mongoose.model("user", userSchema);

module.exports = User;