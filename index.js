//1 zadanie
document.write("<h1>zadanie 1: Rownanie x = a/b</h1>");
let a = parseFloat(prompt("Podaj wartosca:"));
let b = parseFloat(prompt("Podaj wartosc b:"));

if (b == 0) {
    document.write("Blad: Nie mozna dzielic przez zero!<br>");
} else {
    let x = a / b;
    document.write("Wynik x = " + x + "<br>");
}

//Zadanie 2
document.write("<h1>Zadanie 2: Rownanie x = a/b + c/d</h1>");
let c = parseFloat(prompt("Podaj c: "));
let d = parseFloat(prompt("Podaj d: "));

if (b == 0 || d == 0) {
    document.write("Błąd: W mianowniku znajduje się zero (b lub d wynosi 0)!<br>");
} else {
    let v = (a / b) + (c / d);
    document.write("Wynik x = " + v + "<br>");
}

//Zadanie 3
document.write("<h1>Zadanie 3: Równanie x = (a+6) / (b-4)</h1>");
if (b - 4 == 0) {
    document.write("Blad: mianownik (b-4) wynosi zero!<br>")
} else {
    let z = (a + 6) / (b - 4);
    document.write("Wynik z = " + z + "<br>");
}

//Zadanie 4
document.write("<h1>Zadanie 4: Liczba parzysta / nieparzysta</h1>");
let liczba = parseInt(prompt("Wprowadź liczbę całkowitą:"));

if (liczba % 2 == 0) {
    document.write("Liczba " + liczba + "jest parzysta.<br>");
} else {
    document.write("Liczba " + liczba + "jest nieparzysta.<br>");
}

//Zadanie 5
document.write("<h1>Zadanie 5: Podzielność liczby</h1>");
let liczba1 = parseInt(prompt("Wprowadź pierwszą liczbę:"));
let liczba2 = parseInt(prompt("Wprowadź drugą liczbę:"));
if (liczba2 == 0) {
    document.write("Błąd: Nie mozna dzielic przez zero!<br>");
} else if (liczba1 % liczba2 == 0) {
    document.write("Liczba " + liczba1 + " jest podzielna przez " + liczba2 + ".<br>");
}
else {
    document.write("Liczba " + liczba1 + " jest NIE podzielna przez " + liczba2 + ".<br>");
}

//Zadanie 6
document.write("<h1>Zadanie 6: Znak liczby</h1>");
let l = parseFloat(prompt("Wprowadź liczbę:"));

if (l > 0) {
    document.write("Liczba " + l + "jest dodatnia.<br>");
}
else if (l < 0) {
    document.write("Liczba " + l + "jest ujemna.<br>");
}
else {
    document.write("Liczba jest rowna 0.<br>");
}

//Zadanie 7
document.write("<h1>Zadanie 7: Największa z trzech liczb</h1>");
let n1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
let n2 = parseFloat(prompt("Podaj drugą liczbę:"));
let n3 = parseFloat(prompt("Podaj trzecią liczbę:"));

let max = n1;
if (n2 > max) {
    max = n2;
}
if (n3 > max) {
    max = n3;
}

document.write("Największa liczba to: " + max + "<br>");

//zadanie 8 
document.write("<h1>Zadanie 8: Trzy liczby rosnąco</h1>");
let x1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
let x2 = parseFloat(prompt("Podaj drugą liczbę:"));
let x3 = parseFloat(prompt("Podaj trzecią liczbę:"));

let najm, srodek, najw;

if (x1 <= x2 && x1 <= x3) {
    najm = x1;
    if (x2 <= x3) { srodek = x2; najw = x3; }
    else { srodek = x3; najw = x2; }
} else if (x2 <= x1 && x2 <= x3) {
    najm = x2;
    if (x1 <= x3) { srodek = x1; najw = x3; }
    else { srodek = x3; najw = x1; }
} else {
    najm = x3;
    if (x1 <= x2) { srodek = x1; najw = x2; }
    else { srodek = x2; najw = x1; }
}

document.write("Liczby w kolejności rosnącej: " + najm + ", " + srodek + ", " + najw + "<br>");