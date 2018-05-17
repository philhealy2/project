
// Load the http module to create an http server.
import React from 'react';
import ReactDOM from 'react-dom';
//import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv'
import express from 'express';
import recipieRouter from './api/recipies';
import {loadRecipies} from './src/recipiesData';
import {loadUsers} from './src/usersData';
import usersRouter from './api/users';


dotenv.config();

const app = express();

const port = process.env.PORT;

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/entries_db");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var cors = require('cors');

app.use(cors());

loadRecipies();
loadUsers();

app.use('/api/recipies', recipieRouter);
app.use('/api/users', usersRouter);
app.use(express.static('public'));

app.listen(8080, () => {
  console.info(`Server running at ${port}`);
});