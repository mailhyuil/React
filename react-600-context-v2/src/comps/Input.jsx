import { useContext } from "react";
import Context from "../context/Context";
/**
 * 부모 컨테이너로부터 props로 전달받던 addrList state 배열을
 * AppContext.Provider의 Store에서 제공받기
 */
const Input = () => {
  const { address, setAddress, addrList, setAddrList } = useContext(Context);

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const onClickEvent = (e) => {
    setAddrList([...addrList, address]);
  }
  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={address.a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={address.a_tel}
      />
      <input
        name="a_address"
        onChange={onChangeEvent}
        placeholder="주소"
        value={address.a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
