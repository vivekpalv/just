const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const parentroutervendor = require('./routers/vendorrouters');
const parentadmin = require('./routers/adminrouter');
const parentkyc = require('./routers/kycrouter');
const parentsignup = require('./routers/authrouter');
const parentuser = require('./routers/userrouter');


//importing express into 'app' for getting '.use()' function
const app = express();

//MiddleWare
app.use(bodyParser.json());

//parent routers

app.use('/vendor',parentroutervendor);
app.use('/admin',parentadmin);
app.use('/kyc',parentkyc);
app.use('/auth',parentsignup);
app.use('/user',parentuser);

//mongoDb Connected
const dbURI = 'mongodb://localhost:27017/employeesDB'; // Replace with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });



//server start
    const PORT = process.env.PORT || 3000;
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
    });