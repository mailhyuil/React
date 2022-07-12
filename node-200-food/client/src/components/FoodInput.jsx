import React from 'react';

const FoodInput = () => {

    const onClick = (e) => {
        const f_name = document.querySelector('input[name="f_name"]');
        const f_eat = document.querySelector('input[name="f_eat"]');
        const f_cal = document.querySelector('input[name="f_cal"]');

        const f_data = {
            f_name: f_name.value,
            f_eat: f_eat.value,
            f_cal: f_cal.value,
        }

        const postOption = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(f_data),
        };

        fetch(`http://localhost:3000/food/insert`, postOption);

    }

    return (
        <>
            <input name="f_name" placeholder="음식을 입력해주세요" />
            <input name="f_eat" placeholder="섭취량" />
            <input name="f_cal" placeholder="칼로리" />
            <button onClick={onClick}>입력완료!</button>
        </>
    );
};

export default FoodInput;