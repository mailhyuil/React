import React, { useState, useEffect } from 'react';
import FoodList from "./FoodList"
import moment from "moment";

const FoodInput = () => {
    const [foodList, setFoodList] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchFoodList();
    }, [])

    const fetchFoodList = async () => {
        const response = await fetch("http://localhost:3000/food/list");
        const jsonFood = await response.json();
        setFoodList(jsonFood);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        setTotal(total + Number.parseInt(e.target[2].value));

        const food = {
            f_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
            f_name: e.target[0].value,
            f_intake: e.target[1].value,
            f_calorie: e.target[2].value + " K",
            f_total: Number.parseInt(e.target[2].value) + total + " K",
        }

        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";

        const postData = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(food),
        }

        fetch("http://localhost:3000/food", postData)
            .then(res => res.text())
            .then((result) => {
                if (result === "OK") {
                    fetchFoodList();
                }
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder="음식을 입력해주세요" className="w3-input" />
                <input type="number" placeholder="섭취량을 입력해주세요" className="w3-input" />
                <input type="number" placeholder="칼로리를 입력해주세요" className="w3-input" />
                <button>섭취정보 등록!</button>
            </form>
            <FoodList foodList={foodList} />
        </div>
    );
};

export default FoodInput;