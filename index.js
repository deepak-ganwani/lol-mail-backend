const express=require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const app=express();
const Mail = require("./model.js");

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO;

app.use(express.json());
app.use(cors());

app.post("/api/send", async (req, res) => {
    try {
        await Mail.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        console.log(error.message);
    }
});

const connectDB=async(url)=>{
    try {
        await mongoose.connect(url);
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
};

const start=async ()=>{
    await connectDB(MONGO_URL);
    app.listen(PORT, ()=>{
        console.log(`Server is up: ${PORT}`);
    });
};

start();