//HOMEWORK
//IF
// 1.
let number = prompt('Введіть число');
if (number < 0){
    alert("Число від'ємне") ;
}
else if(number == 0){
    alert('Нуль');
}
else if (number > 0){
    alert('Число додатнє');
}

// 2.
let age = prompt('Введіть вік');
if (age > 0 && age <= 120){
    alert('Дані коректні')
}
else{
    alert('Error!')
}

// 3.
let module = prompt('Введіть число');
if(module >= 0){
    alert('Модуль числа '+ module);
}
else if(module < 0){
    moduleA = (module*(-1));
    alert ('Модуль числа ' + moduleA);
}

// 4.
let hours = prompt ('Enter hours');
let minutes = prompt ('Enter minutes');
let seconds = prompt ('Enter seconds');
if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59){
    alert ('Correct time!');
}
else{
    alert ('Error!');
}

//5.
let x = prompt ('Enter X');
let y = prompt ('Enter Y');
if (x > 0 && y > 0){
    alert('Point is in 1st quadrant');
}
else if (x < 0 && y > 0){
    alert('Point is in 2nd quadrant');
}
else if (x < 0 && y < 0){
    alert('Point is in 3rd quadrant');
}
else if (x > 0 && y < 0){
    alert('Point is in 4th quadrant');
}
else if (x == 0 && y > 0 || y < 0){
    alert('Point is on absciss line');
}
else if (y == 0 && x > 0 || x< 0 ){
    alert('Point is on ordinate line');
}
else if (x == 0 && y == 0){
    alert('Point is in the begining');
}

//Тернарний
//1.
let a = prompt ('Enter a');
let b = prompt ('Enter b');
var c = ( a > b ) ? "Більше число a = " + a : "Більше число b = " + b;
alert (c)
//2.
let d = prompt ('Enter');
var e = (d % 5) ? alert ("Не кратне 5") : alert ("Кратне 5");
//3.
let planet = prompt ('Введите название планеты')
var name = (planet == "Земля" || planet == "земля") ? "Привет, земляне!" : "Привет, инопланетяне!";
alert (name);



