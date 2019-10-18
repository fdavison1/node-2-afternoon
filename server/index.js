const express = require('express')
const PORT = 3001
const ctrl = require('./controllers/messages_controller')

const app = express()
app.use(express.json())


app.get('/api/test', ctrl.test)
app.post('/api/messages', ctrl.createMessage)
app.get('/api/messages', ctrl.returnMessages)
app.put('/api/messages/:id', ctrl.updateMessages)
app.delete('/api/messages/:id', ctrl.deleteMessage)




app.listen(PORT, ()=>console.log(`${PORT} is on and working as intended`))