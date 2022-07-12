import React from "react";
import BucketItem from "./BucketItem";

const BucketList = ({ bucketList, functions }) => {
  const bucketBody = bucketList.map((bucket) => {
    return <BucketItem key={bucket.b_id} item={bucket} functions={functions} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>중요도</th>
          <th>시작일</th>
          <th>Bucket</th>
          <th>완료일</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
};

export default BucketList;
