const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const exerciseRouter = require('./routes/exerciseRoute');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);


mongoose.connect( process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> {
        console.log("database connection established");
    })
    .catch(err => { console.log(err)});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});