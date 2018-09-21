var express = require('express')   // express for routing* - (i.e) user when requests like /login /register /home express will route particular path in here 
 
var server = express()   //  initializing that damn express into our server(node)(often calling it as Express App)
var path = require('path')  // path is declared. bcz we have to go into out html files folder. path will guide you home
var bodyparser = require('body-parser') // getting data from client(body)
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())



server.use(express.static(path.join(__dirname,'client/views')))  // starting journey to get that shit login.html



// hairpin-bend - zero
server.get('/', function(req, res){ //now express came to action.   '/' is for default behavior. server get a initial request 
   res.sendFile(__dirname+"/client/views/login.html") // we will send that login.html for User
})


server.post('/submit', function(req, res){ // oh someone sending his details from frontend ... we have to check those
      console.log(req.body)  // usually incomming data's are where in query* pocket . or in body pocket
      // console.log(req.body) // if you want to see...that... uncomment this line

      
      res.send("Okay")// if someone asking ..we have to be respond. even it would be a look  

})

server.listen(8080,(()=>{   // server starting listening on localhost = its 127.0.0.1:port   =>port is 8080
   console.log("visit http://localhost:8080")  // printing for our reference
})) /// you know these are... closing brackets.  :)



// files 
// package.json is an npm shit = its have all the details about our damn project.