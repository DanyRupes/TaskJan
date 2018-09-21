const mongoose = require('mongodb')  // mongoose is a npm package for accessing mongo Database

var url = "moongodb://localhost:27017" // mongodb server running on port 27017 - 

mongoose.connect.on('connected',console.log("connected mongodb"))


mongoose.connect.on('error', console.log("DB connection error"))

const account_scheme = ({
   name : String,  //type of name is a string
   age : String, // type of age also set  String
   // ...  fill 
   // ....  more 
   // ...  details
})


var accounts = mongoose.model({"accounts":account_scheme})


module.exports = {accounts:accounts}   // exporting the whole Programs into a appropriate module for accessing database Documents


// MongoDB is a  : no sql database no relation by defualt 
//  Collections - Big Thing -like table name ex: accounts
//  Document  - every collection have many documents ex: user1_account, and user3_account - thses are all documents
//  field  - inside a document fields are available. ex: name, age,.....
