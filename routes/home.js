const router = require('express').Router();
const mongoose = require('mongoose');
const axios = require('axios');
router.post('/connect/:firstCollection', async (req, res) => {
    //mongo db connection
    mongoose.connect(`${req.body.mongoURL}/__CONCOX__?retryWrites=true&w=majority`, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('connected to DATABASE')
    });
    // collection preparation
    coll1 = mongoose.Schema({
        deviceId:{
            type:'array',
        }
    })
    const Data = mongoose.model(req.params.firstCollection, coll1);
    // const data = axios({url , method: 'GET'})
    return res.status(200).send("new data added successfully");



})

module.exports = router