const express = require('express')
const ejs = require('ejs');
const path = require('path')
app = express();

require('./database/mongoose');
const cors = require('cors');

//CORS -> Cross Origin Request Services/Policies

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+'/views/'));

const port = process.env.PORT || 2244 ;

const User = require('./models/user');
const userRouter = require('./router/users');


app.use(cors());
app.use(express.json());
app.use(userRouter);

app.use('/test', (req,res,next)=>{
    res.status(200).send("I am testing this route");
})


app.use((req,res,next)=>{
    res.status(404).render('404.ejs', {pageTitle:'ATTENDANCE COOUNTER TESTING'});
})

app.use((req,res,next)=>{
    res.status(503).send('the site is on for maintainance');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


