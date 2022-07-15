import { useAppContext } from "../context/ContextProvider";
import Item from "./Item"

const List = () => {
  const { addrList } = useAppContext(); //idea userContext 

  const addrBody = addrList.map(addr => {
    return (<Item addr={addr} />)
  })

  return <>
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
    </table>
  </>
};

export default List;
