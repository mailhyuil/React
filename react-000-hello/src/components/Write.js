import React, { useState, useEffect } from "react";
import View from "./View";

const Write = () => {
  const [title, setTitle] = useState("Korea");
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=J4BSirTTziJzD9AsHx6ecGt3j88CXt6ODUUFGSkPT6DiPIUFzmWqfmoewnCGS6u6mADr4D4lPkzKaZEy%2BvJIow%3D%3D&dataType=JSON&numOfRows=10&pageNo=1&base_date=20220628&base_time=0600&nx=55&ny=127`,
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      return res;
    }

    fetchData()
      .then((res) => res?.json())
      .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <input name="title" value={title} onChange={onChange} />
      <div>{title}</div>
      <View title={title} />
    </div>
  );
};

export default Write;
