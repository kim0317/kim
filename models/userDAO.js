var connection = require('./db')

exports.createStudent =function(data, cb){
    sql = "INSERT INTO student (email,password,name,number,gender) values(?,?,?,?,?)";
    values=[data.email, data.password, data.name, data.number, data.gender]
    var resultStudent = connection.query(sql,values, (error,results)=>{
        if(error){
            console.log(error);
        }else {
            cb(results);
        }
    })
}

exports.findStudentByEmail = function(email, cb){
    sql = "SELECT * FROM student where email=?";
    values = [email];
    var resultStudent = connection.query(sql,values, (error, results)=> {
        if(error){
            console.log(error);
        }else{
            cb(results[0])
        }
    });
}

exports.createTeacher =function(data, cb){
    sql = "INSERT INTO teacher (email,password) values(?,?)";
    values=[data.email, data.password]
    var resultStudent = connection.query(sql,values, (error,results)=>{
        if(error){
            console.log(error);
        }else {
            cb(results);
        }
    })
}

exports.findTeacherByEmail = function(email, cb){
    sql = "SELECT * FROM teacher where email=?";
    values = [email];
    var resultStudent = connection.query(sql,values, (error, results)=> {
        if(error){
            console.log(error);
        }else{
            cb(results[0])
        }
    });
}