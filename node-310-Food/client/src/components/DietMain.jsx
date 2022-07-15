import React, { useEffect, useState, useContext } from 'react';
import DietInput from './DietInput';
import DietList from './DietList';
import DietContext from '../context/DietContext';

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
            {/**
             * DietContext.jsx 파일에 Context를 하나 생성해 두고
             * Context의 Provider에게 params에 담긴
             * 변수와 함수들을 저장해 놓기(Store)
             * 
             * 각각 개별 Component에 전달했던 params를 제거
             */}
            <DietContext.Provider value={params}>
                <DietInput />
                <DietList />
            </DietContext.Provider>
        </div>
    );
};

export default DietMain;