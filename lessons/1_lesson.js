let a = 50;
if (true) {
  let a = 24;
  console.log(a);
}
console.log(a);
//------------------------
function hoisted() {
  age = 30;
}

let age;
hoisted();
console.log(age);
//-----------------------

const array = [1, 2, 4, 5, 7];
console.log(array);

array.push(23);
console.log(array);

//----------------------------
const obj = {a: 12}
obj.name = 'Dima'

console.log(obj);
