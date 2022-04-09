const express = require('express')
const app = express()
const port = 3000 //port number web app is hosted

app.get('/', (req, res) => {  //.get() is for GET requests, '/' is the home page, req is the request, res is the response we will be doing
  //res.send('Hello World!') //Respond with "Hello World" when in '/' or home page
  res.json({ //.json returns a json object
    message: "My name is Jose Sanchez"  //Created to specification
  })
})

app.listen(port, () => { //used to bind and listen the connections on the specified host and port
  console.log(`Example app listening on port ${port}`)
})
