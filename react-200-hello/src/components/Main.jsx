import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState(0);
  const apiURL = "/get/1360000/VilageFcstMsgService";
  const areaLand = "/getLandFcst?regId=11F20501";
  const apiServiceKey =
    "HqsAExzgHQFhUjy7hdAth6LJ2WMaLc43V0PVrqTbgFNprnLpaeiJLjd07d4O%2BOMzFPhfP6JJqL%2FV%2BCYWKHxjtw%3D%3D";
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch Data");
      const queryString = `${apiURL}${areaLand}&serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
      console.log(queryString);
      const response = await fetch(queryString);
      return await response.json();
      // console.log("res data", response.ok, json);
      // return json;
    };
  }, []);

  return (
    <div className="Main">
      <h1>{data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        click me!
      </button>
    </div>
  );
};

export default Main;
