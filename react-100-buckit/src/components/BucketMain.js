import React, { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";
import BucketList from "./BucketList";

const BucketMain = () => {
  const [bucketList, setBucketList] = useState([]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = {
        b_id: uuid(),
        b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
        b_bucket: e.target.value,
        b_end_date: "",
      };
      setBucketList([...bucketList, bucket]);
      e.target.value = "";
      console.log(bucketList);
    }
  };

  const bucket_delete = (id) => {
    const bucketRemovedList = bucketList.filter((bucket) => {
      return bucket.b_id !== id;
    });
    setBucketList(bucketRemovedList);
  };

  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        className="w3-input w3-border w3-hover-tray w3-round"
        placeholder="버킷에 추가할 내용을 입력해주세요"
      />
      <div>
        <BucketList bucketList={bucketList} bucket_delete={bucket_delete} />
      </div>
    </div>
  );
};

export default BucketMain;
