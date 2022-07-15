import React from 'react';
import { useState } from 'react';
import Sub1 from './Sub1';

const Main = () => {
    const [data, setData] = useState("")

    return (
        <div>
            <input />
            <Sub1 />
        </div>
    );
};

export default Main;