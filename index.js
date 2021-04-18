const express = require('express')
const mongoose = require('mongoose')
const route = require('./route');
const bodyParser = require('body-parser')
const cors = require('cors');
const { json } = require('body-parser');
mongoose.connect("mongodb+srv://user1:user@12345@cluster0.8xofa.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
   ()=> {
         const app = express();
        app.use("/api", route);
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.json());
        app.listen(process.env.PORT || 3000, () => {
        console.log("Server Started on 3000 !!");
          })
      } 
)