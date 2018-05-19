
// Load the http module to create an http server.
// import React from 'react';
// import ReactDOM from 'react-dom';
import mongoose from 'mongoose';
// import http from 'http';
import {Mockgoose} from 'mockgoose';
import dotenv from 'dotenv';
import express from 'express';
import recipieRouter from './api/recipies';
import {loadRecipies} from './src/recipiesData';
import {loadUsers} from './src/usersData';
import {loadShoplist} from './src/shoplistData';
import usersRouter from './api/users';
import shoplistRouter from './api/shoplist';


dotenv.config();
export const app = express(); // replaces the previous const app = express()

const port = process.env.PORT;


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/entries_db');

// Connect to database
if (process.env.NODE_ENV == 'test') {
  // use mockgoose for testing
  const mockgoose=new Mockgoose(mongoose);
  mockgoose.prepareStorage().then(()=>{
    mongoose.connect(process.env.mongoDB);
  });
} else {
  // use real deal for everything else
  mongoose.connect(process.env.mongoDB);
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});


let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
let cors = require('cors');

app.use(cors());

loadRecipies();
loadUsers();
loadShoplist();

app.use('/api/recipies', recipieRouter);
app.use('/api/users', usersRouter);
app.use('/api/shoplist', shoplistRouter);
app.use(express.static('public'));

app.listen(8080, () => {
  console.info(`Server running at ${port}`);
});
