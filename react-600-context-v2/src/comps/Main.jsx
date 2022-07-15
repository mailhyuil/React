// react 로 부터 useState 함수를 추출하기
// const useState = ()=>{ }
// export { useState }
import { useState } from "react";
import Context from "../context/Context";

// export default Input
import Input from "./Input";
import List from "./List";
import View from "./View";

const Main = () => {
  const [isEdit, setEdit] = useState(false);

  const [address, setAddress] = useState({
    a_name: "홍길동",
    a_tel: "010-111-1111",
    a_address: "서울특별시",
  });

  const [addrList, setAddrList] = useState([]);


  return (
    <>
      <Context.Provider value={{ addrList, setAddrList, address, setAddress }}>
        <Input />
        <View />
        <List />
      </Context.Provider>
    </>
  );
};

export default Main;
