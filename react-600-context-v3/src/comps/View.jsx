import { useAppContext } from "../context/ContextProvider";

const View = () => {
    const { address } = useAppContext();

    const { a_name, a_tel, a_address } = address;

    return (
        <div>
            <strong>이름 : </strong>
            <span>{a_name}</span>
            <strong>전화번호 : </strong>
            <span>{a_tel}</span>
            <strong>주소 : </strong>
            <span>{a_address}</span>
        </div>
    );
};

export default View;