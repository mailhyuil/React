/*
use로 시작되는 react의 함수
Hook 함수
component의 lifecycle과 관련되 함수들이다
state를 만들거나, state 변화를 감시하거나
component가 rendering되는 시점에 무언가를 실행시키거나
하는 용도의 함수들이다.
*/
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import moment from "moment";
import BucketList from "./BucketList";

const BucketMain = () => {
  const [bucketList, setBucketList] = useState(() => {
    const bucketBody = JSON.parse(localStorage.getItem("BUCKETLIST"));
    if (bucketBody) return bucketBody;
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("BUCKETLIST", JSON.stringify(bucketList));
  }, [bucketList]);

  // 버킷을 입력한 후 버킷을 추가할 때
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = {
        b_id: uuid(), // bucket PK 생성
        b_flag: 0, // 중요도를 표시
        b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
        b_bucket: e.target.value,
        b_end_date: "",
      };
      setBucketList([...bucketList, bucket]);
      e.target.value = "";
      console.log(bucketList);
    }
  }; // onKeyDown

  const bucket_delete = (id) => {
    const bucketRemovedList = bucketList.filter((bucket) => {
      return bucket.b_id !== id;
    });
    setBucketList(bucketRemovedList);
  }; // bucket_delete

  const bucket_item_edit = (id, content) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp_bucket = { ...bucket, b_bucket: content };
        return _temp_bucket;
      }
      return bucket;
    });
    setBucketList(bucketBody);
  };

  // 중요도 칼럼을 클릭했을때
  // 중요도 항목을 변경시킬 수 있도록, b_flag변수값을 변경시키는 함수
  const bucket_flag_toggle = (id) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        // 원래의 bucket 데이터를 spread하고
        const _temp_buck = { ...bucket, b_flag: bucket.b_flag + 1 };
        return _temp_buck;
      }
      return bucket;
    }); // end map
    setBucketList(bucketBody);
  }; // bucket_flag_toggle

  const bucket_complete = (id) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        let e_date = bucket.b_end_date
          ? ""
          : moment().format("YYYY[-]MM[-]DD HH:mm:ss");

        return { ...bucket, b_end_date: e_date };
      }
      return bucket;
    });
    setBucketList(bucketBody);
  }; // bucket_complete

  const functions = {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  };

  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        className="w3-input w3-border w3-hover-tray w3-round"
        placeholder="버킷에 추가할 내용을 입력해주세요"
      />
      <div>
        <BucketList bucketList={bucketList} functions={functions} />
      </div>
    </div>
  );
};

export default BucketMain;
