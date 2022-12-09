const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');
const product = require('./models/product')
const category = require('./models/category')
const productRouter = require('./routes/productRouter')(product)
const categoryRouter = require('./routes/categoryRouter')(category)

const app = express()
app.use(cors({
    origin: '*'
}));
const port = 3000
const url = `mongodb+srv://rashad:ynqP2brFl1OZRSmx@cluster0.j0mydwz.mongodb.net/practice-assignment?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api', productRouter)
app.use('/api', categoryRouter)


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})