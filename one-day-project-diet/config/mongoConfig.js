import mongoose from "mongoose";

const USERNAME = "hyuil";
const PASSWORD = "12341234"
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.n6lttyl.mongodb.net/?retryWrites=true&w=majority`;

/*
mongoose 도구를 사용하여
NoSQL인 mongoDB에 DMBS Schema 방식으로 접근하기
*/
const Schema = mongoose.Schema;

const food = Schema({
    f_date: String,
    f_name: String,
    f_intake: String,
    f_calorie: String,
    f_total: String,
})



const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
//? mongoURL to app.js
//? food_model to foodAPI.js