const express = require('express');
const {
    PlayerModel
} = require('../models/player');
const router = express.Router();

router.get("/", async (req, res) => {
    let result = await PlayerModel.find();
    res.send(result);
})

router.post("/", async (req, res) => {
    let player = new PlayerModel(req.body);
    let result = await player.save();
    return res.send(result);
})
router.delete("/", async (req, res) => {
    let playerToDelete = req.body.playerName;
    let result = await PlayerModel.deleteOne({
        playerName: playerToDelete
    });
    return res.send(result);
})

module.exports = router;