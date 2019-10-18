let messages = []
let id = 0

module.exports = {
    test: (req, res, next) => {
        res.status(200).send('you got me')
    },
    createMessage : (req, res, next) => {
        const {text, time} = req.body
        messages.push({
            id: id,
            text: text,
            time: time
        })
        id++
        res.status(200).send(messages)
    }, 
    returnMessages: (req, res, next) => {
        res.status(200).send(messages)
    },
    updateMessages: (req, res, next) => {
        const {text, time} = req.body
        const {id} = req.params

        const messageIndex = messages.findIndex((message)=> message.id === +id)
        messages[messageIndex] = {id: +id, text, time}
        res.status(200).send(messages)
    }
}