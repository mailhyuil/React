import React from 'react';

const FoodList = ({ foodList }) => {

    const foodBody = foodList.map(food => {
        return (
            <tr>
                <td>
                    {food.f_date}
                </td>
                <td>
                    {food.f_name}
                </td>
                <td>
                    {food.f_intake}
                </td>
                <td>
                    {food.f_calorie}
                </td>
                <td>
                    {food.f_total}
                </td>
            </tr>);
    })

    return (
        <table className="w3-table w3-talbe-all">
            <thead>
                <tr>
                    <th>날짜</th>
                    <th>식품명</th>
                    <th>섭취량</th>
                    <th>칼로리</th>
                    <th>총칼로리</th>
                </tr>
            </thead>
            <tbody>{foodBody}</tbody>
        </table>
    );
};

export default FoodList;