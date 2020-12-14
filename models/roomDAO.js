var connection = require('./db')

exports.createRoom =function(data, cb){
    sql = "INSERT INTO laptop_room ( name , is_available , current_user , maximum_user) values(?,1,0,?);";
    values=[data.name, data.maximum_user]
    var resultRoom = connection.query(sql,values, (error,results)=>{
        if(error){
            console.log(error);
        }else {
            cb(results);
        }
    })
}

exports.reserveRoom = function(data, cb){
    // room_name
    // email
    sql = "update laptop_room set current_user=current_user+1 where name=?"; // laptop_room의 current_user + 1
    values=[data.room_name]
    var resultRoom = connection.query(sql,values, (error,results)=>{
        if(error){
            console.log(error);
        }
    })
    sql = "update student set using_laptop_room = ? where email=? "; // 요청한 student의 using_laptop_room = data.laptop_room
    values=[data.room_name, data.email]
    var resultRoom = connection.query(sql,values, (error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            cb(results);
        }
    })
}

exports.getRoomList = function(cb){
    sql = "Select * from laptop_room";
    var resultRoom = connection.query(sql,null, (error,results)=>{
        if(error){
            console.log(error);
        }else {
            cb(results);
        }
    })
}

exports.getRoom = function(room_name,cb){
    sql = "Select * from laptop_room where name = ?";
    values = [room_name];
    var resultRoom = connection.query(sql,values, (error,results)=>{
        if(error){
            console.log(error);
        }else {
            console.log(results)
            cb(results[0]);
        }
    })
}