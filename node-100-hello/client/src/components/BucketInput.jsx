import React, { useState, useEffect } from 'react';
import BucketList from "./BucketList"

const BucketInput = () => {
    const [bucketList, setBuckList] = useState([]);

    useEffect(() => {
        fetchBuckList();
    }, [])

    const fetchBuckList = async () => {
        const response = await fetch("http://localhost:3000/bucket/list");
        const jsonBuck = await response.json();
        setBuckList(jsonBuck);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {

            const bucket = {
                b_bucket: e.target.value,
                b_flag: 0,
                b_sdate: "2022-07-05 13:20:00",
                b_cancel: false,
            }

            const postData = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bucket),
            }

            fetch("http://localhost:3000/bucket", postData)
                .then(res => res.text())
                .then((result) => {
                    if (result === "OK") {
                        fetchBuckList();
                    }
                })
            e.target.value = "";
        }
    }
    return (
        <div>
            <input onKeyDown={onKeyDown} placeholder="BUCKET" className="w3-input" />
            <BucketList bucketList={bucketList} />
        </div>
    );
};

export default BucketInput;