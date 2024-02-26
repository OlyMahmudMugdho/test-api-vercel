const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    return res.json({
        ok : true
    })
})

app.listen(5000, () => {
    console.log('server running')
})