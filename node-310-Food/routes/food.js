import express from "express";
import { db } from "../models/index.js"

const { tbl_food } = db;

const router = express.Router();
router.get("/selectAll", (req, res) => {
    tbl_food.findAll()
        .then((result) => {
            res.json(result);
        })
})

router.post("/insert", (req, res) => {
    tbl_food.create(req.body)
        .then(res.json("OK"))
        .catch(err => res.json(err))
})

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    tbl_food.destroy({ where: { d_id: id } })
        .then(res.json("OK"))
        .catch(err => res.json(err))
})

export default router;
