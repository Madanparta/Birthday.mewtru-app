import express from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import { mongodbConnection } from './DB/dataBaseConnection.js';
dotenv.config()
import cors from 'cors';
import userRouter from './routes/userRouter.js';
const app = express();
const PORT = process.env.PORT || 8080;

mongodbConnection();

app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json());
app.use(morgan("dev"));


app.use('/',(res,req)=>{
    res.send('server runing');
});

app.use('/api/person',userRouter);

app.listen(PORT,()=>console.log(`Backend Server Run With Port : ${PORT}`));

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error..!"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});