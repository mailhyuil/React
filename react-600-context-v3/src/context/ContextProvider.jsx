import { createContext, useContext, useState } from 'react';

const Context = createContext();

//사용자 정의 hook 함수
const useAppContext = () => {
    const context = useContext(Context);
    return context;
}

const AppContextProvider = ({ children }) => {
    const [isEdit, setEdit] = useState(false);

    const [address, setAddress] = useState({
        a_name: "홍길동",
        a_tel: "010-111-1111",
        a_address: "서울특별시",
    });

    const [addrList, setAddrList] = useState([]);

    const props = { addrList, setAddrList, address, setAddress, isEdit, setEdit };

    return <>
        <Context.Provider value={props}>
            {children}
        </Context.Provider>
    </>

}; // AppContextProvider() end

export { AppContextProvider, useAppContext };