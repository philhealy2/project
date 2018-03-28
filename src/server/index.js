
// Load the http module to create an http server.
import React from 'react';
import ReactDOM from 'react-dom';
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv'
import express from 'express';
import recipieRouter from './api/recipies';
import {loadRecipies} from './src/recipiesData';

dotenv.config();

const app = express();

const port = process.env.PORT;

// Connect to database
mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
if (process.env.seedDb) {
  loadRecipies();
}

app.use(express.static('public'));

app.use('/api/recipies', recipieRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});