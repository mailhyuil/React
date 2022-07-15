import { useAppContext } from "../context/ContextProvider";

const Input = () => {
  const { address, setAddress, addrList, setAddrList } = useAppContext();

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
