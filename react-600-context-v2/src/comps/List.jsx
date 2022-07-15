import { useContext } from "react";
import Context from "../context/Context";
import Item from "./Item"
import View from "./View";
// addrList 배열의 값을 표현식으로 구현하기
const List = () => {
  const { addrList } = useContext(Context); //idea userContext 

  const addrBody = addrList.map(addr => {
    return (<Item addr={addr} />)
  })

  return <>
    <View />
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        {addrBody}
      </tbody>
    </table>;
  </>
};

export default List;
