const mongoose = require('mongoose')

const oldUrl = 'mongodb://127.0.0.1:27017/salon-app-test'
const currentUrl = "mongodb+srv://dipanshu:96501@cluster0-xhwit.mongodb.net/salon-app-test?retryWrites=true&w=majority"
const url = "mongodb+srv://sankalp1728:Sankalp%231728@cluster0-uqisn.mongodb.net/test?retryWrites=true&w=majority"


mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}) 

