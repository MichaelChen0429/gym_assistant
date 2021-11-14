const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
    const coursecategory = req.body.queryResult.parameters.coursecategory;
    var feedback = ''
    if (coursecategory == '有氧'){
        feedback = ''
    } else if (coursecategory == '瑜珈') {
        feedback = ''
    } else if (coursecategory == '格鬥') {
        feedback = ''
    } else if (coursecategory == '重訓') {
        feedback = ''
    }
    res.send(feedback)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})