import React from 'react';

// Border 함수객체
const Border = (children) => {
    return (
        <>
            {children}
        </>
    );
};

// Layout 함수객체
const Layout = () => {
    return (<>
        <Border>
            <h1>반갑습니다</h1>
            <p>합성을 이용한 Layout 구성</p>
        </Border>
        <Border>
            <h1>여기는 Main Section입니다.</h1>
        </Border>
    </>)
}

export default Layout;