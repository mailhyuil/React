import React, { useState, useEffect } from 'react';
import { fetchData } from "../module/DataApi.js";
import { zoneCode } from "../module/StnNo";

const ApiMain = () => {
    const [text, setText] = useState("Korea");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData().then(result => {
            console.log(result)
            const item = result.response.body.items.item
            setText(JSON.stringify(item))
            setData([...item]);
        })
    }, [])
    const itemBody = data.map(item => {
        return (<tr key={item.stnId}>
            <td>{zoneCode[item.stnId][0]}</td>
            <td>{zoneCode[item.stnId][1]}</td>
            <td>{item.title}</td>
            <td>{item.tmSeq}</td>
            <td>{item.tmFc}</td>
        </tr>)
    })
    return (
        <table className="w3-table w3-table-all">
            <tbody>
                {itemBody}
            </tbody>
        </table>
    );
};

export default ApiMain;