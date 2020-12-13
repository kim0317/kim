var express = require('express');
var router = express.Router();
var user_model = require('../models/userDAO');
var room_model = require('../models/roomDAO');

router.get('/',async(req,res)=>{ // Room 리스트 조회
    var resultRoom = await new Promise((resolve, reject)=>{
        room_model.getRoomList((results)=>{
            resolve(results);
        })
    })

    res.send({"rooms":resultRoom})
    .status(200)
    .end()
})

router.get('/:name', async(req,res)=>{ // room name으로 하나 조회
    var resultRoom = await new Promise((resolve, reject)=>{
        room_model.getRoom(req.params.name,(results)=>{
            resolve(results);
        })
    })

    res.send({"room":resultRoom})
    .status(200)
    .end()
}) 

router.post('/', async (req, res) => { // Room 생성
    // name
    // maximun_user
    data = {
        "name": req.body.name,
        "maximum_user" : req.body.maximum_user
    }

    var createdRoom = await new Promise((resolve, reject)=>{
        user_model.createRoom(data, (results)=>{
            resolve(results);
        }
        )
    });
    
    res.status(201)
    .send({'message' : "create laptop room"})
    .end();

})

router.put('/reserve/:room_name', async (req, res)=>{
    data = {
        "room_name" : req.params.room_name,
        "email" : req.body.email
    }

    var resultStudent = await new Promise((resolve, reject)=>{
        room_model.reserveRoom(data, (results)=>{
            resolve(results);
        })
    })

    res.status(200)
    .send({'message' : "success reservation"})
    .end();
})

module.exports = router