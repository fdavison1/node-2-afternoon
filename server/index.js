const express = require('express')
const PORT = 3001
const ctrl = require('./controllers/messages_controller')

const app = express()
app.use(express.json())


app.get('/api/test', ctrl.test)




app.listen(PORT, ()=>console.log(`${PORT} is on and working as intended`))