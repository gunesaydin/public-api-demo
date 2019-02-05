const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser');

const APP_PORT = process.env.PORT || 8000;


/* New mongo client doesn't have its own promise library anymore,
setting up ES promises instead */

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MLAB_DB_URL, { useMongoClient: true });



// Set default folder for static files

app.use(express.static(__dirname + '/public'));



// Setting up body parser to parse JSON from incoming requests

app.use(bodyParser.json());



/* Even though this is a small app and routes are not many, 
setting them up for a better folder structure */

app.use('/api/blogs', apiRoutes);





app.listen(APP_PORT, () => console.log('App is listening from PORT:', APP_PORT));