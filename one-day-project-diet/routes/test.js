import express from "express";
const router = express.Router();


router.get('/', (req, res, next) => {

    const obj = {
        name: req.query.name,
        age: req.query.age,
    }

    req.obj = obj;

    next();
})


router.get('/', (req, res) => {

    res.json(req.obj)

})

export default router;
