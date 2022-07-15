import React, { useContext, useEffect, useState } from 'react';
import moment from "moment";
import DietContext from '../context/DietContext';

const DietInput = () => {
    const { fetchFood, setFoods } = useContext(DietContext);

    const [food, setFood] = useState({
        d_date: moment().format("YYYY[-]MM[-]DD"),
        d_food: "",
        d_qty: "",
        d_cal: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFood({ ...food, [name]: value });
    }

    const onClick = async (e) => {
        const postOption = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(food),
        };

        const res = await fetch("/food/insert", postOption);
        if (res.ok) {
            const json = await res.json();
            console.log(json);
            fetchFood().then(result => setFoods(result));
        }
    }

    return (
        <div className="w3-row-padding">
            <div className="w3-col s2 m2 l2">
                <input className="w3-input" name="d_date" type="date" value={food.d_date} onChange={onChange} />
            </div>
            <div className="w3-col s2 m2 l2">
                <input className="w3-input" name="d_food" type="text" value={food.d_food} placeholder="메뉴를 입력하세요" onChange={onChange} />
            </div>
            <div className="w3-col s2 m2 l2">
                <input className="w3-input" name="d_qty" type="number" value={food.d_qty} placeholder="섭취수량을 입력하세요" onChange={onChange} />
            </div>
            <div className="w3-col s2 m2 l2">
                <input className="w3-input" name="d_cal" type="number" value={food.d_cal} placeholder="단위 칼로리를 입력하세요" onChange={onChange} />
            </div>
            <button onClick={onClick} className="w3-button w3-blue">저장하기</button>
        </div>
    );
};

export default DietInput;