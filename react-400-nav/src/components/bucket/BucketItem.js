import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

const BucketItem = ({ item, functions }) => {
  const [bucket_IsEdit, setEdit] = useState(false);

  const bucket_edit = (e) => {
    setEdit(!bucket_IsEdit);
  };
  const bucket_edit_complete = (e, id) => {
    if (e.keyCode === 13) {
      functions.bucket_item_edit(id, e.target.value);
      setEdit(false);
    } else if (e.keyCode === 27) {
      setEdit(false);
    }
  };

  return (
    <tr className={item.b_end_date === "" ? "" : "cancel"}>
      <td
        onClick={() => {
          functions.bucket_flag_toggle(item.b_id);
        }}
      >
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      {bucket_IsEdit && item.b_end_date === "" ? (
        <td>
          <input
            defaultValue={item.b_bucket}
            onKeyDown={(e) => bucket_edit_complete(e, item.b_id)}
          />
        </td>
      ) : (
        <td onClick={bucket_edit}>{item.b_bucket}</td>
      )}
      <td
        onClick={() => {
          functions.bucket_complete(item.b_id);
        }}
      >
        {item.b_end_date}
      </td>
      <td
        onClick={() => {
          functions.bucket_delete(item.b_id);
        }}
      >
        &times;
      </td>
    </tr>
  );
};
/**
 * event 핸들러에서 어떤 값을 전달하면서 실행하고자 할때 다음과 같은 코드는
 * 절대 사용하면 안된다
 * <td onClick={bucket_complete(item.b_id)}></td>
 * 위의 코드는 event와 관계없이 환면이 rendering 될때 내부의 함수가
 * 실행되어버린다
 *
 * event 핸들러에 어떤 값을 전달하면서 실행하기 위해서는
 * 한번 더 함수를 감싸줘야 한다
 * <td onClick={()=>bucket_complete(item.b_id)}></td>
 */
export default BucketItem;
