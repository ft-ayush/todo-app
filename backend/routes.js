const {Router} = require('express')
const router = Router()
const {createTodo, updateTodo} = require('./types')
const {todo} = require('./db')

router.post('/todo',async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success)
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

router.get('/todos', async (req, res) => {
    const todos = await todo.find()
    res.json({todos})
})

router.put('/completed', async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success)
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
    await todo.updateMany({
        _id: updatePayload.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

module.exports = {router}