import React, { useEffect, useState } from 'react';
import DietInput from './DietInput';
import DietList from './DietList';

const DietMain = () => {
    const [foods, setFoods] = useState([]);

    const fetchFood = async () => {
        const res = await fetch("/food/selectAll");
        if (res.ok) {
            return await res.json();
        }
    }

    useEffect(() => {
        fetchFood().then(result => {
            setFoods(result);
        })
    }, []);

    const removeFoodItem = (d_id) => {
        fetch(`/food/delete/${d_id}`, { method: "delete" }).then(res => res.text()).then(result => {
            const filterBody = foods.filter(food => {
                if (food.d_id !== d_id) {
                    return food;
                }
            });
            setFoods(filterBody)
        })
    }
    const params = {
        fetchFood,
        setFoods,
        removeFoodItem,
        foods,
    }
    return (
        <div>
            <DietInput params={params} />
            <DietList params={params} />
        </div>
    );
};

export default DietMain;