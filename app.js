const express = require('express');
const app = express();
const mongoose = require('mongoose');
const signUpModel = require('./signUpModel');
const bodyParser = require('body-parser');
const path = require('path');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(process.env.PORT || 5000, () => {
    console.log("server listing to port 5000");
});

mongoose.connect('mongodb://webapp:12345678@ds155218.mlab.com:55218/sample-db').then((data) => {


    console.log('connected to database');
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'));
})

app.get('/', (req, res) => {

    res.send('Home Root');

})

app.post('/signup', (req, res) => {
    debugger
    console.log(req.body);

    signUpModel.findOne({ "loginName": req.body.loginName }).then((data) => {

        if (data == null) {

            var signupObj = new signUpModel(req.body).save().then((data) => {
                if (data.password)
                    data.password = "******";
                res.send({ "Status": "success", "Data": data });
            });

        } else {
            res.send({ "Status": "already exists" });
        }

    });

});

app.post('/login', (req, res) => {
    signUpModel.find({ 'loginName': req.body.loginName, 'password': req.body.password }).then((data) => {
        console.log("xxx", data);
        if (data.length > 0) {
            if (data[0]['password'])
                data[0]['password'] = "******";
            res.send({ "Status": "success", "session": data });
        }
        else
            res.send({ "Status": "failed" });
    });
});

app.post('/mainList', (req, res) => {
    signUpModel.find({}, (error, data) => {
        console.log("test", data);
        if (data.length > 0) {
            for (let index = 0; index < data.length; index++) {
                data[index]['password'] = "********";
            }
            res.send({ "Status": "success", "Data": data });
        }
        else
            res.send({ "Status": "failed" });
    });
});

app.get('/dashboard', (req, res) => {
    res.send("dashboard");
});

// app.put('/update/:id', (req, res) => {
//     console.log(req.params.id);
//     console.log(req.body);
//     signUpModel.findByIdAndUpdate(req.params.id, res.body, (err, data) => {
//         if (err)
//             res.send({ "Status": "failed", "Error": err });
//         else
//             res.send({ "Status": "updated", "Data": data });
//     });
// });

app.put('/update/:id',(req,res)=>{

    console.log(req.params.id);
    console.log(req.body);
    signUpModel.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{

        if (err) return res.status(500).send(err);

        signUpModel.findById(req.params.id,(err,dataAfterUpdate)=>{
            console.log("data",data);
            console.log("updateddata",dataAfterUpdate);
            const response = {
                Status: "updated",
                Data: dataAfterUpdate
            };
    
            res.send(response);    

        });
        
    });


});

app.delete('/delete/:id', (req,res)=>{
    console.log(req.params.id);
    signUpModel.findByIdAndRemove(req.params.id,(err,data)=>{
        if (err)
            res.send({ "Status": "failed", "Error": err });
        else
            res.send({ "Status": "deleted", "Data": data });
    })
});