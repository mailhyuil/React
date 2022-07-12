import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get('/', (req, res) => {
})

router.post('/insert', (req, res) => {
    const Schema = mongoose.Schema;
    console.log(req.body)
    const food = Schema({
        f_date: String,
        f_name: String,
        f_intake: String,
        f_calorie: String,
        f_total: String,
        f_eat: String,
        f_cal: String,
    });

    const food_model = mongoose.model("food", food);

    food_model.create(req.body);
})

export default router;