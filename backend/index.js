const express = require('express')
const app = express()
const cors = require('cors')
const {router} = require('./routes')
const PORT = 3000

app.use(express.json())
app.use(cors({origin: "http://localhost:5173"}))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})