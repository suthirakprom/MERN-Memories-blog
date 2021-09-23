import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();


// set up the body parser, so they can properly send the request. 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors);

// middleware
app.use('/posts', postRoutes);
// connect to mongodb
const CONNECTION_URL = "mongodb+srv://admin:test1234@cluster0.5xxa2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log(`server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

