import React, { useContext, useState } from 'react';
import DietContext from "../context/DietContext";
const DietItem = ({ item }) => {

    const [isEdit, setEdit] = useState(false);
    const { removeFoodItem } = useContext(DietContext);

    const removeEvent = (d_id) => {
        if (window.confirm(d_id + " 데이터를 삭제하시겠습니까?")) {
            removeFoodItem(d_id);
        }
    }

    const onEdit = () => {
        setEdit(true);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setEdit(false);
        }
    }

    return (
        <tr key={item.d_id}>
            <td>{item.d_date}</td>

            {isEdit
                ? (<td><input onKeyDown={onKeyDown} defaultValue={item.d_food} /></td>)
                : (<td onClick={onEdit}>{item.d_food}</td>)
            }

            <td>{item.d_qty}</td>
            <td>{item.d_cal}</td>
            <td>{item.d_qty * item.d_cal}</td>
            <td style={{ cursor: "pointer" }} onClick={() => removeEvent(item.d_id)}>&times;</td>
        </tr>
    );
};

export default DietItem;