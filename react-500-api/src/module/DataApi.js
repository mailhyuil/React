/*
fetch 함수를 사용하여 data.go.kr의 api 연결하기 
*/

const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey = "J4BSirTTziJzD9AsHx6ecGt3j88CXt6ODUUFGSkPT6DiPIUFzmWqfmoewnCGS6u6mADr4D4lPkzKaZEy%2BvJIow%3D%3D";

const fetchData = async ()=>{
    const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`
    const response = await fetch(serviceURL);
    const json = await response.json();
    return json;
};

export { fetchData };