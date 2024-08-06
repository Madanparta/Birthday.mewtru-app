// import express from 'express';
// const userRouter  = express.Router();
// import { getUser, getUsers, postUsers } from '../controllers/userControllers.js';

const express = require('express');
const userRouter = express.Router();
const { getUser, getUsers, postUsers } = require('../controllers/userControllers');


userRouter.post('/storeP',postUsers)
userRouter.get('/:id',getUser)
// userRouter.get('/storeG',getUsers)

// export default userRouter;
module.exports = userRouter;