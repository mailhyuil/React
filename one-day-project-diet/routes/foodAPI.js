import express from "express";
import { food_model } from "../config/mongoConfig.js"

/**
 * const router = express.Router; // 함수 객체를 router안에 담기
 * const router = express.Router(); // 함수 실행
 */
console.log(express.Router)
const router = express.Router();

router.get('/', (req, res, next) => {
    const query = req.query.name;
    res.json({ name: query })
    // router code here
});

router.post('/', (req, res, next) => {
    const body = req.body;
    console.log(body)
    food_model.create(body) // request.body 값을 "INSERT"
        .then(() => res.send("OK"));
});

router.get("/list", (req, res) => {
    // bucket_model을 참조 "selectAll(find())"
    // 결과를 result 변수로 받음
    food_model.find({}).then(result => res.json(result))
})

export default router;
