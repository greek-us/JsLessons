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

//Задачи циклы и фунцкии
//вывести четные числа

//   for (var i = 100; i > 1; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//  }
// }
// //заполнить массив x
// let massiv = [];
// for (var i = 0; i < 10; i++) {
//   massiv.push('x');
// }
// console.log(massiv);
//заполнить от 1 до 10
// let massiv=[];
// for (var i = 1; i < 11; i++) {
//   massiv.push(i);
// }
// console.log(massiv);
//заполнить массив случайными числами(дробями) от 0 до 1
// let massiv = [];
//  for (var i = 0; i < 10; i++) {
//     massiv.push(Math.random().toFixed(2));
//  }
//  console.log(massiv);
//заполнить массив случайными числами  от 0 до 10
// let massiv = [];
// for (var i=0; i<10; i++) {
//   massiv.push(Math.floor(Math.random()*10));
// }
// console.log(massiv);
//Вывести только четные
let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i<10; i++) {
  console.log(massiv);
}
