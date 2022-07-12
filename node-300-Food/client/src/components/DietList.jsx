import React, { useEffect, useState } from 'react';

const DietList = ({ params }) => {
    const { foods, removeFoodItem } = params;
    const foodsBody = foods.map((item) => {
        return (<tr key={item.d_id}>
            <td>{item.d_date}</td>
            <td>{item.d_food}</td>
            <td>{item.d_qty}</td>
            <td>{item.d_cal}</td>
            <td>{item.d_qty * item.d_cal}</td>
            <td style={{ cursor: "pointer" }} onClick={(e) => removeEvent(e, item.d_id)}>&times;</td>
        </tr>)
    })

    const removeEvent = (e, d_id) => {
        if (window.confirm(d_id + " 데이터를 삭제하시겠습니까?")) {
            removeFoodItem(d_id);
        }
    }
    return (
        <table className="w3-table w3-table-all">
            <thead>
                <tr>
                    <th>날짜</th>
                    <th>식품명</th>
                    <th>섭취량</th>
                    <th>단위 칼로리</th>
                    <th>총 칼로리</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {foodsBody}
            </tbody>
        </table>
    );
};

export default DietList;