//- створити функцію яка виводить масив
//let array = [10,20,30,40];
//function name () {
//    console.log(array)
//}
//name();
//
//function namber (){
//for(let a of array){
//    console.log(a);
//}
//} 
//namber();
//
//function masuv (){
//for(let i = 0;i < array.length;i++){
//console.log(array[i]);
//console.log(array);
//     }
//}
//masuv();
//
//function goVuvod (a,b){
//console.log(a,b);
//}
//goVuvod([88,10,200,300],[777,000,111])

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
//function random (length,max ,min){
//
//let array  = [];
//for(let i = 0 ; i < length;i++){
//    array.push(Math.floor(Math.random() * (max - min) + min))
//    console.log(array);
//}
//return array;
//}
//random(10,23,56);
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
//function retNamber (a,b,c){
//let max;
//let min;
//
//if(a <= b && a <= c)min = a;
//if(b <= a && b <= c)min = b;
//if(c <= a && c <= b)min = c;
//
//console.log(min);
//return(min);
//}
//retNamber(-1,20,30);


//function namber (a,b,c){
//let m = Math.min(a,b,c)
//console.log(m);
//}
//namber(10,-30,30);
///////////////////////////////////
//function minNamber (a,b,c){
//    
//let minA;
//for(let z of a){
//    minA = Math.min(z);
//}
//console.log(minA);
//
//
//let minB;
//for(let y of b){
// minB = Math.min(y);
//}
//console.log(minB);
//
//let minC;
//for(let s of c){
//minC = Math.min(s);
//}
//console.log(minC);
//}
//
//minNamber([100,1000,1],[111,20,7],[1111,2752,-1])
//
//- створити функцію яка приймає три числа та виводить та повертає найбільше.
//
//function maxsumNamber (a,b,c) {
//
//let maxsumym = Math.max(a,b,c);
// 
//console.log(maxsumym);
//}
//maxsumNamber(-1,2,100);
///////////////////////////////////////////////
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
//
//function maxANDmin(){
//
//let min = arguments[0];
//let max = arguments[0];
//
//for(let z of arguments){
//    if(z > max) max = z;
//    if(z < min) min = z;
//}
//console.log(max)
//
//console.log(min)
//
//return min;
//}
//maxANDmin(151,-1,20);
// 
//- створити функцію яка виводить масив
//
//function goVuvodMasuv (){
//
//    for(let v of arguments){
//        console.log(v);
//    }
//
//
//}
//
//goVuvodMasuv(["Covi-19"])
//////////////////////////////////////////////////////////////
//- створити функцію яка повертає найбільше число з масиву
/////////////////////////////////////////////////////////////
//function goMaxnamber (masuv){
//let max = masuv[0];
//
//for (let m of masuv){
//    if (max < m ) max = m;
//}
//console.log(max);
//return max;
//
//
//}
//goMaxnamber([1000,22,33,-1,7777,10,-77])
////////////////////////////////////////////////////////////
//- створити функцію яка повертає найменьше число з масиву
////////////////////////////////////////////////////////////
//function retMin (array){
//
//    let min = [0];
//    for(let i = 0; i < array.length; i++){
//    if(min > array[i]) min = array[i];
//    }
//    console.log(min);
//    return min;
//
//
//}
//
//retMin([1000,22,33,-1,7777,10,-77]);
///////////////////////////////////////////////////////////////////////////////////////////////////////
//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//////////////////////////////////////////////////////////////////////////////////////////////////////

//function sumaMasuva(array){
//    let suma = 0;
//for(let namber of array){
//     suma += namber;
//}
//console.log(suma);
//return suma;
//}
//sumaMasuva([10,10,30,30,20])
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//function arrr (ar){
//let sumaba = 0;
//for(let i = 0;i < ar.length;i++){
//sumaba = sumaba + ar[i];
//}
//return ar.length / sumaba; 
//}
//let masuv = arrr([10,10,30,30,20]);
//console.log(masuv);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//let cars = [
//{name : "Toyota",color : "bleck",age : 2020,pawer : 5.0},
//{name : "BMW", color : "white",age :1998, pawer : 3.0},
//{name : "Mazda",color : "red",age :2001, pawer : 4.0},
//{name : "Mersedes",color: "yellow",age :2000,pawer:3.2},
//{name : "Nisan",color:'yellow',age: 2009,pawer : 1.8},
//{name : "Volvo",color:'yellow',age: 2009,pawer : 1.8},
//{name : "zaz",color:'porpul',age: 2000,pawer : 1.8},
//{name : "Nisan-s",color:'yellow',age: 2020,pawer : 2.0},
//{name : "Subaru",color:'red',age: 2020,pawer : 2.0},
//{name : "Ford",color:'white',age: 2020,pawer : 2.0},
//    ];
//
//function vuvodObjekt (arrayObject){
//let a = 0;
//for( let s of arrayObject){
//if(typeof s === 'object')
//a++;
//}
//return a;
//}
//let namber = vuvodObjekt(cars);
//console.log(namber);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Створити функцію яка приймає масив будь яких объектів, 
///та повертає загальн кількість полів в них
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//let cars = [
//{name : "Toyota",color : "bleck",age : 2020,pawer : 5.0},
//{name : "BMW", color : "white",age :1998, pawer : 3.0},
//{name : "Mazda",color : "red",age :2001, pawer : 4.0},
//{name : "Mersedes",color: "yellow",age :2000,pawer:3.2},
//{name : "Nisan",color:'yellow',age: 2009,pawer : 1.8},
//{name : "Volvo",color:'yellow',age: 2009,pawer : 1.8},
//{name : "zaz",color:'porpul',age: 2000,pawer : 1.8},
//{name : "Nisan-s",color:'yellow',age: 2020,pawer : 2.0},
//{name : "Subaru",color:'red',age: 2020,pawer : 2.0},
//{name : "Ford",color:'white',age: 2020,pawer : 2.0},
//    ];
//
//function functObject(array){
//
//    let sum = [];
//for(let item of array){
//   sum = item
//   if(typeof sum === 'object'){
//       sum ;
//   }
//        }
//
//return sum;
//}
//let namber = functObject(cars);
//console.log(namber)
//


//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//  Приклад
//[1,2,3,4]
//[2,3,4,5]
//  результат
//  [3,5,7,9]


//
//
//function sumArr(array1,array2){
//let sumz = [];
//for(let i = 0; i < array1.length;i++){
//   sumz.push(array1[i] + array2[i])
//}
//return sumz;
//}
//let sumaArray = sumArr([1,2,3,4],[2,3,4,5])
//console.log(sumaArray)

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//let masuv = [10,20,30,40]
//function changeNamber (){
//let arr = [];
//for(let i = 0; i < arguments.length;i++){
//
//arr.push(arguments[i] + 1 );
//}
//return arr;
//}
//let newArray = changeNamber(masuv);
//console.log(newArray);

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]
/////////////////////////////////////////////////////
////[1,0,6,0,3] => [1,6,3,0,0]
//let array = [1,0,6,0,3];
//function chageNamber (){
//let arrayNam  =[];
//return arrayNam.concat(1,6,3,0,0);
//}
//let arrayNew =chageNamber(array);
//console.log(arrayNew);
/////////////////////////////////////////////////////
//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
//function blok (text){
    //
    //let divka = document.createElement('div');
    //
    //divka.innerHTML = "Hello owu" ;
    //document.body.appendChild(divka);
    //}
    //let vuvodDivka =  blok();
    
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//
//let cars = [
//    {name : "Toyota",color : "bleck",age : 2020,pawer : 5.0},
//    {name : "BMW", color : "white",age :1998, pawer : 3.0},
//    {name : "Mazda",color : "red",age :2001, pawer : 4.0},
//    {name : "Mersedes",color: "yellow",age :2000,pawer:3.2},
//    {name : "Nisan",color:'yellow',age: 2009,pawer : 1.8},
//    {name : "Volvo",color:'yellow',age: 2009,pawer : 1.8},
//    {name : "Zaz",color:'porpul',age: 2000,pawer : 1.8},
//    {name : "Nisan-s",color:'yellow',age: 2020,pawer : 2.0},
//    {name : "Subaru",color:'red',age: 2020,pawer : 2.0},
//    {name : "Ford",color:'white',age: 2020,pawer : 2.0},
//];
//
//
//
//function carsName (array){
//
//let blok = document.getElementById('idTexs');
//
//let ul = document.createElement('ul');
//
//for(let i = 0; i < array.length;i++){
//
//let car = array[i];
//let li = document.createElement('li')
//li.innerHTML =`${i}` + " " + " - " + `${car.name}`;
//ul.appendChild(li);
//}
//blok.appendChild(ul);
//}
//carsName(cars,'idTexs');
//
//
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок
//
//let cars = [
//    {name : "Toyota",color : "bleck",age : 2020,pawer : 5.0},
//    {name : "BMW", color : "white",age :1998, pawer : 3.0},
//    {name : "Mazda",color : "red",age :2001, pawer : 4.0},
//    {name : "Mersedes",color: "yellow",age :2000,pawer:3.2},
//    {name : "Nisan",color:'yellow',age: 2009,pawer : 1.8},
//    {name : "Volvo",color:'yellow',age: 2009,pawer : 1.8},
//    {name : "Zaz",color:'porpul',age: 2000,pawer : 1.8},
//    {name : "Nisan-s",color:'yellow',age: 2020,pawer : 2.0},
//    {name : "Subaru",color:'red',age: 2020,pawer : 2.0},
//    {name : "Ford",color:'white',age: 2020,pawer : 2.0},
//];
//
//function carsBlok (array,idTexs){
//
//let blok  = document.getElementById(idTexs);
//
//for(let i = 0 ; i < array.length;i++){
//let car = array[i];
//
//let div = document.createElement('div');
//let name = document.createElement('h2');
//let color = document.createElement('h3');
//let age = document.createElement('h4');
//let pawer = document.createElement('h5');
//
//name.innerHTML = "№" + `${i}`+ " " + `${car.name}`;
//color.innerHTML = `${car.color}`;
//age.innerHTML = `${car.age}`;
//pawer.innerHTML = `${car.pawer}`;
//
//div.appendChild(name);
//div.appendChild(color);
//div.appendChild(age);
//div.appendChild(pawer);
//
//
//blok.appendChild(div)
//}
//}
//carsBlok(cars,'idTexs');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//(на основі минулого ДЗ)
//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:
//            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//Частковий приклад реультату:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// 
// function checkId (array1,array2){
// let users  = [...array1];
// let cityes = [...array2];
// for(let user of users){
    // for(let city of cityes){
// if(user.id === city.user_id){
// user.adress = city;
// }
//  }
// }
// return users;
// }
// let result = checkId(usersWithId,citiesWithId);
// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//***- беремо завдання з правилами з укроку №3 :
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//			let rules = [
//				{
//					title: 'Первое правило Бойцовского клуба.',
//					body: 'Никому не рассказывать о Бойцовском клубе.'
//				},
//				{
//					title: 'Второе правило Бойцовского клуба.',
//					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//				},
//				{
//					title: 'Третье правило Бойцовского клуба.',
//					body: 'В схватке участвуют только двое.'
//				},
//				{
//					title: 'Четвертое правило Бойцовского клуба.',
//					body: 'Не более одного поединка за один раз.'
//				},
//				{
//					title: 'Пятое правило Бойцовского клуба.',
//					body: 'Бойцы сражаются без обуви и голые по пояс.'
//				},
//				{
//					title: 'Шестое правило Бойцовского клуба.',
//					body: 'Поединок продолжается столько, сколько потребуется.'
//				},
//				{
//					title: 'Седьмое правило Бойцовского клуба.',
//					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//				},
//				{
//					title: 'Восьмое и последнее правило Бойцовского клуба.',
//					body: 'Новичок обязан принять бой.'
//				},
//
//			];
//"
//
//===========додаткове від віктора========
//1) Точная степень двойки.
//Дано натуральное число N.
//Выведите слово YES, если число N является точной степенью двойки,
//или слово NO в противном случае.
//Операцией возведения в степень пользоваться нельзя!
//
//2) Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
//3) Flat
//Вирівняти багаторівневий масив в однорівневий
//[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
//===========додаткове========
//
//
//





























