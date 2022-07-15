const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  let rnd = Math.floor(Math.random() * (max - min) + min);
  json_array.push(rnd);
}
console.log(json_array);

/**
 * JS에서 기존의 배열을 새로운 배열로 복제하는 경우가 자주있다
 *
 */
const new_array1 = json_array.slice();

const new_array2 = Array.from(json_array);

const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  new_array3[i] = json_array[i];
}

const new_array4 = json_array.concat();

const new_array5 = json_array.map((item) => {
  return item;
});

const new_array6 = [...json_array];

const new_array7 = [...json_array, 100, 200, 100, 400, 500];
console.log("array1", new_array1);
console.log("array2", new_array2);
console.log("array3", new_array3);
console.log("array4", new_array4);
console.log("array5", new_array5);
console.log("array6", new_array6);
console.log("array7", new_array7);

const book = {
  title: "자바만세",
  author: "김자바",
  comp: "영진출판사",
  price: 20000,
};
// book json 객체에 원래는 없던 lang 라는 속성에 값을
// 저장하는 코드를 만나면 lang 속성을 추가하면서 값을 할당한다.
// 객체의 속성이 추가, 변경되는 것은 어떤 문제를 일으킬 수 있는
// 준비가 되었다라고 봐도 된다.

book.lang = "korea";

console.log(book);
/**
 * js에서 json, 배열 데이터를 다룰때
 * 값을 변경하거나 할때 기존 json, 배열을 변경하지 말고
 * 변경된 내용으로 새로운 json, 배열을 생성하여 데이터를 복제하고
 * 생성한 json, 배열의 내용을 변경하여 사용하도록 권장한다
 */
// 기존의 book Json 객체를 spread 하여 book1에 복제하기
const book1 = { ...book };
const book2 = {
  title: book.title,
  author: book.author,
  comp: book.comp,
  price: book.price,
};

const book3 = book; // 복사가 아닌 주소 참조
console.log("book", book);
console.log("book3", book3);

book.title = "오라클";
console.log("book", book);
console.log("book3", book3);

const book4 = { ...book, title: "MySQL" };
console.log("book4", book4);

// 새로운 book5 JSON을 생성하기
const book5 = { ...book, discount: "10%" };
console.log("book5", book5);

const { title, author, price, comp } = book;

/*
const title = book.title;
const author = book.author;
const price = book.price;
const comp = book.comp;
*/

const books = ["자바", "오라클", "mysql"];
const [a, b, c] = books;
console.log(a, b, c);
