const mongoose = require("mongoose");
const Joi = require("joi");



mongoose.connect("mongodb://localhost/playersDB").then(() => {
        console.log("connected to mongoDB");
    })
    .catch((err) => {
        console.log("could not connect to MongoDB", err);
    })


const schema = new mongoose.Schema({
    playerName: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 50,
        unique: true
    },
    level: {
        type: Number,
        default: 0,
    },
    job: {
        type: String,
        require: true,
    },
    exp: {
        type: Number,
        default: 0,
    }
})

const Player = mongoose.model("player", schema);

exports.PlayerModel = Player;