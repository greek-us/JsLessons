//Функция
let f1 = document.querySelector('.f-1'); //кнопка

function one() {
  console.log('work');
}
one();
//********************************************
//Анонимная функция
f1.onclick = () => {
  console.log('Hello');
}

//********************************************
//f1.onclick = one; //без круглых скобок, onclick не прописывается в html

function two(){
  console.log('work 2');
  return 54;
}

console.log(2 * two()) ;
//********************************************

let a = 8;
let b = 9;

function multi() {
  console.log(a*b);
  return a*b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x = 9, y = 8) {
  return x * y;
}

console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20));

document.querySelector('.f-2').onclick = function() {
  console.log('+++++');
}
document.querySelector('.f-2').onclick = () => {
  console.log('arrow');
  console.log('===');
}
//************************************
