import express from "express";
const router = express.Router();

import { food_model } from "../mongoConfig.js"

router.post('/insert', (req, res) => {
    // router code here
    console.log(req.body);
    food_model.create(req.body)

    res.json({ OK: "OK" });
})

router.get("/selectAll", (req, res) => {
    food_model.find({}).then(result => res.json(result));
})

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log('id', id)
    food_model.findOneAndRemove({ d_id: id })
        .exec()
        .then(res.send("OK"))
})

export default router;

/**
 * router, Controller에서 사용하는 RequestMethod
 * get : 데이터를 요청할 때
 * post : 데이터를 추가할 때
 * delete : 데이터를 삭제할 때
 * put : 데이터를 업데이트할 때
 */