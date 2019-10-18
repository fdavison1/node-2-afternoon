let messages = []
let id = 0

module.exports = {
    test: (req, res, next) => {
        res.status(200).send('you got me')
    },
    createMessage : (req, res, next) => {
        const {text, time} = req.body
        messages.push({
            text: text,
            time: time
        })
        id++
        res.status(200).send(messages)
    }

}