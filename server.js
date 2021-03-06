// Dependencies
const express = require('express')
const app = express()

// Users
const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
]

// Route
app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

app.listen(8000, () => console.log('The server is running on port 8000'))
