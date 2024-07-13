'use strict';
// 1 ---------- Destructuring, spread va rest operatorlari --------------

// #### Destructuring

// ** "Destructuring" - Javascript’dagi maxsus ifoda bo’lib, uning yordamida
//  array’dagi qiymatlarini yoki obyektdagi xossalarini ajratib olish imkonini beradi. **

// array misol

// const ismlar = ['Murod', 'Nodir', 'Shoqqi', 'Orif'];

// const [ism1, ism2] = ismlar;
// console.log(ism1, ism2);

// const [firstValue, ...otherValues] = ismlar;
// console.log(firstValue);
// console.log(otherValues);

// object misol

// const person = { firstname: 'Mrodbek', lastname: 'Tojiboyev', age: 25 };

// const { firstname, age } = person;
// console.log(firstname, age);

// const { name, ...otherProperties } = person;
// console.log(firstname);
// console.log(otherProperties);

// #### Rest operator;

// ** "Rest operator" - miqdori oldindan aniq bo’lmagan qiymatlarni
// array ko’rinishda ifodalashda ishlatilinadi **

// const total = (...numbers) => {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// total(10, 15, 20, 25);

// const [first, ...otherValues] = [10, 15, 20, 25];
// console.log(first);
// console.log(otherValues);

// const { firstname, ...otherProperties } = {
//     firstname: 'Murodbek',
//     lastname: 'Tojiboyev',
//     age: 17
// };
// console.log(firstname);
// console.log(otherProperties);

// #### Spread operator

// "Spread operator" - takrorlanadigan (array’ga o’xshash) qiymatlarni yoyishda ishlatilinadi.

// const numbers = [1, 5, 3];
// const max = Math.max(...numbers);
// console.log(max);

// const array1 = [1, 5, 3];
// const array2 = [...arr1, 8, 6];

// console.log(arr2);

// const person = { firstname: 'Mrodbek', lastname: 'Tojiboyev' };
// const personWithJob = { ...person, age: 17 };
// console.log(personWithAge);

// ** Spread operatori iteratsiya elementlarini yoki
// obyektning xususiyatlarini "yoyadi". **

// ** Rest operatori bir nechta elementlarni array’ga
// yoki bir nechta xususiyatlarni obyektga to'playdi. **

// 2 -------------- Short circuit, Nullish va nOptional chaining -----------------

// Short-circuit evaluation

// ** Javascript dasturlash tilida berilgan ifodani chapdan o’ngga qarab ||
// (OR) va && (AND) operatorlar yordamida hisoblashga short-circuit
// evaluation deyiladi.
// Agar kutilgan shart bajarilsa, va berilgan ifodaning qolgan qismi shartga
// o’z ta’sirini ko’rsatmasa, berilgan ifoda short-circuit’ga uchraydi va qiymat
// darhol qaytarilinadi. **

// #### || (OR)

// ** || operatori birinchi rost (true) bo’lgan qiymatni darhol qaytarib
// yuboradi. Agar berilgan operand’lardan hech qaysisi rost (true) qiymatga
// ega bo’lmasa, yolg’on (false) qiymati qaytarilinadi. **

// console.log(true || false);
// console.log(7 || 'Murod');
// console.log('' || 'Murod');
// console.log(true || 0);

// const person = {
//     ism: 'Murod',
//     yosh: 17
// };

// console.log(person.ish || 'Dasturchi');

// #### && (AND)

// ** && operatori berilgan ifodada yolg’onga (false) uchrasa darhol false
// qaytaradi. Agar berilgan operand’larning barchasi rost (true) bo’lsa, oxirgi
// rost qiymat qaytarilinadi **

// console.log(true && false);
// console.log(0 && 'Murod');
// console.log('' && 'Murod');
// console.log(true && null);

// const person = {
//     ism: 'Murod',
//     yosh: 17
// };

// console.log(person.ish && 'Dasturchi');

// Nullish coalescing operator

// ** Nullish coalescing ( ?? ) operatori mantiqiy operator bo’lib, berilgan
// ifodaning chap operandi null yoki undefined bo’lgan holatda, o’ng
// tarafdagi qiymat qaytirilinadi, aks holda chap operand qiymatni qaytaradi. **

// const location = '';
// const yourLocation = location ?? 'A default destination';

// console.log(emailLocation);

// #### Optional chaining

// ** Optional chaining ( ?. ) operatori berilgan obyektni xossasini olishda
// yoki funksiyasini chaqirishda ishlatilinadi. Agar obyekt yoki berilgan
// funksiya undefined yoki null bo’ladigan bo’lsa, berilgan ifoda short
// circuit’ga uchraydi va natijaviy qiymat undefined ’ga teng bo’ladi va hech
// qanday xato yuzaga kelmaydi. **

// const person = {
//     ism: 'Murod',
//     age: 17
// };

// const univerName = person.univer?.univerName;
// console.log(univerName);
// console.log(person.school?.());

// 3 ---------------------  Maps va Sets -------------------------

// #### Maps

// ** Map obyekti o’zida key-value (kalit-qiymat) ko’rinishidagi juftliklarni
// saqlaydi va kalitlarni kiritilgan tartibda saqlab turadi. **

// const myMap = new Map();

// myMap.set('firstname', 'Ulugbek');
// myMap.set('lastname', 'Samigjonov');
// myMap.set('age', 25);

// console.log(myMap.get('firstname'));

// myMap.set('job', 'Software Engineer');

// console.log(myMap.get('job'));
// console.log(myMap.size);

// myMap.delete('lastname');

// console.log(myMap.size);

// ** Obyetklarga xossa qo’shganimizdek, map’larga ham xossa qo’shish
// imkoniyati mavjud lekin u ba’zi bir tushunmovchiliklarga olib kelishi
// mumkun. **

// const myMap = new Map();
// myMap['firstname'] = 'Ulugbek';
// myMap['lastname'] = 'Samigjonov';
// console.log(myMap);

// console.log(myMap.has('firstname'));

// myMap.delete('firstname');
// console.log(myMap);

// #### Sets

// ** Set obyekti unique bo’lgan qiymatlarni saqlashda ishlatilinadi. Set obyekti
// qiymatlar to’plamidan tashkil topgan bo’lib, berilgan qiymat to’plamda
// faqatgina bir martta uchrashi mumkun. **

// const mySet = new Set();

// mySet.add(10); // Set(1) { 10 }
// mySet.add(15); // Set(2) { 10, 15 }
// mySet.add(15); // Set(2) { 10, 15 }
// mySet.add('Ulugbek'); // Set(3) { 1, 5, 'Ulugbek' }
// const person = { age: 25, job: 'Software Engineer' };
// mySet.add(person);

// console.log(mySet);

// mySet.add({ age: 25, job: 'Software Engineer' });

// console.log(mySet.has(10)); // true
// console.log(mySet.has(11)); // false
// console.log(mySet.has(person)); // true

// console.log(mySet.size); // 5

// mySet.delete(10);
// console.log(mySet.has(10)); // false

// console.log(mySet.size); // 4

// 4 ------------------ JS Runtime va Engine ---------------------

// #### JS Runtime

// ** Javascript Runtime - maxsus muhit bo’lib, Javascript kodni ishga
// tushirish uchun kerak bo’ladigan barcha dasturlar va kutubxonalarni o’z
// ichiga oladi. Uning asosiy qismi JS Engine bo’lib, undan tashqari Event
// Loop, Timer’lar bilan ishlash, va kod ishga tushayotgan muhit bilan aloqa
// o’rnatish uchun kerak bo’ladigan API’larni ham taqdim etadi. **

// Javascript Engine (Callback, Memory) --> WEB APIs (consle, setTimeout, fetch) --> Callback Queue
// JAVASCRIPT RUNTIME ENVIRONMENT

// more information (https://dev.to/manak/the-javascript-engine-52h2)

// #### JS Engine

// ** JS Engine - kompyuter dasturi bo’lib, Javascript tilida yozilgan kodni
// interpret qilishda yordam beradi. Boshqacha qilib aytganda, JS engine
// JS’da yozilgan kodni ishga tushiradi. --
// --Hozirga eng mashhur engine’lardan biri Google Chrome V8 hisoblanadi. **

// Kod ishga tushishini sodda ko’rinishi

// JS Engine
// JS File --> Parser --> Ast --> Interpreter --> Profiler --> Compiler --> Optimized codde --> Your Screen

// 1. Parser - HTML hujjatimizdagi barcha script tag’laridagi JS kodlarni ajratib olib,
// va token’larga o’giradi

// 2. AST - oldingi qadamdan olingan token’lar yordamida AST node’lari yaratilinadi

// 3. Interpreter - berilgan AST’dagi node’larni o’qib  chiqib, byte 
// kodga o’giradi. Kod satr bo’ylab, tepadan pastga qarab ishga tushiriladi

// 4. Profiler - kodni optimizatsiyalash uchun kuzatadi

// 5. Compiler - interpretatsiya sekin bo’lgani uchun, ko’p qaytariladigan kodlar
// kompilyatsiya qilinadi va shu orqali kodni ishga tushirish vaqti qisqaradi

// JS Engine asosiy qismlari:
// Call Stack - berilgan kod ishga tushiriladigan qism

// Heap - memory pool bo’lib, dasturimizga kerak bo’ladigan obyektlarni 
// saqlash vazifasini bajaradi

// more information (https://dev.to/sanderdebr/a-brief-explanation-of-the-javascript-engine-and-runtime-2idg);

// 5 ------------------  EventLoop ---------------------

// #### EventLoop

// ** Javascript barcha amaliyotni bitta thread’da amalga oshiradi, bu degani
// berilgan vaqtda faqatgina bitta kod ishga tushiriladi. Lekin maxsus data
// structure’lar yordamida, JS’da multi-threading’ga o’xshash holatni amalga
// oshirsa bo’ladi. **

// ** Call stack - ishga tushirilishi kerak bo’lgan barcha funksiyalarni o’zida
// saqlab turadi. Funksiya o’z ishini tugatgandan so’ng stack’dan olib
// tashlanadi. **

// ** Call stack - ishga tushirilishi kerak bo’lgan barcha funksiyalarni o’zida
// saqlab turadi. Funksiya o’z ishini tugatgandan so’ng stack’dan olib
// tashlanadi. **

// 1 ex.

// function greet() {
//     return "Hello";
// }

// function respond() {
//     return setTimeout(() => {
//         return "Hey!";
//     }, 1000);
// };

// greet();
// respond();

// 2 ex.

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 1000);
// const baz = () => console.log("Third");
// bar();
// foo();
// baz();

// more information (https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)