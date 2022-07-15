import React, { useEffect, useState, useContext } from 'react';
import DietItem from './DietItem';
import DietContext from '../context/DietContext';
const DietList = () => {


    //idea createContext.provider의 value에 데이터를 담아서
    //idea 서브컴포넌트에서 const {dataName...} = useState(createContext)사용

    const { foods } = useContext(DietContext);

    const foodsBody = foods.map((item) => {
        return (<DietItem key={item.d_id} item={item} />);
    })


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