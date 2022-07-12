import React from "react";
import BucketItem from "./BucketItem";

const BucketList = ({ bucketList, bucket_delete }) => {
  const bucketBody = bucketList.map((bucket) => {
    return (
      <BucketItem
        key={bucket.b_id}
        item={bucket}
        bucket_delete={bucket_delete}
      />
    );
  });
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
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
