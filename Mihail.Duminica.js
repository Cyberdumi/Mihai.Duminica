// ES6 a introdus let si const printre altele, diferenta dintre var si let este ca 
//let nu permite redeclararea variabilelor si are scop de bloc
//exemplu
{
    let x = 2;
}
// x nu poate fi folosit in afara blocului de instructiuni
{
    var y = 2;
    var z = 3;

}
  let sum = y +z ;
  console.log("afiseaza suma y+z " )
  console.log( sum);
  // afiseaza suma y+z deoarece var permite utilizarea variabilelor in afara blocurilor

/*let ex1 = 7;
let ex1 = "exemplu";
in aceasta situatie primim eroare de sintaxa deoarce variabilele declarate cu let nu pot fi redeclarate */

// const se foloseste pentru declararea constantelor, o valoare din aceasta "variabila" nu poate fi schimbata

/*const abc = 10

abc = 7; vom avea eroare */

// ES6 de asemenea a implementat Arrow functions spre exemplu
//ES%
var es5 = function (a,b){
    return a * b ;
}
console.log("Functia afiseaza produsul numerelor a si b : ")
console.log(es5);

//ES6
const x = (x, y) =>   {return x * y}
console.log(x);

// ES6 implementeaza for of ca structura repetetitiva
// looping over an Array

const masini = ["BMW", "Dacia", "Toyota"];
let text = "";
for (let x of masini ){
    text += x + " ";
}
//Structura parcurge array ul de masini si il introduce in text
console.log(text);



// ES6 contine metoda String.includes() care returneaza true daca un string contine o valoare specificata, altfel fals

let text1 = "Acest string contine valoarea adevarat"
text1.includes("adevarat") // returneaza true

// ES6 String.startsWith() returneaza true daca un string incepe cu o valoare specifica, altfel fals

let text2 = "Acest string incepe cu acest"
text2.startsWith("Acest") // returneaza true

// ES6 Math.sign() returneaza semnul numarului : pozitiv, negativ sau null () spre exemplu:
Math.sign(-4); // returneaza -1
Math.sign(0); // returns 0
Math.sign(16); // returns 1


//Punctul 1.3
// In ES6 spread operator "(...)" raspandeste prin extragere dintr-un iterabil ex (array, map, set) 

const impar =  [1,3,5];
const reuniune = [2,4,6, ...impar];  // aici array ul reuniune se formeaza prin datele 2,4,6 si datele din array ul impar
console.log(reuniune); // returneaza [2,4,6,1,3,5]

//Punctul 1.4 In javascript orice poate fi obiect, de la datele predefinite cum ar fi (boolean, number, string daca sunt definine cu "new"), arrays, functions, math, objects sunt intotdeauna obiecte
//Objects sunt o colectie de valori denumite, cu proprietati diferite, 
// Obiectele pot fi definite literl sau prin folosirea metodei new Obeject()

const persoana = {nume:"Duminica", prenume:"Mihai", varsta:22, culoareaParului:"brunet"};
// Obiectul persoana contine datele persoanei Duminica MIhai in varsta de 22 ani avand culoarea parului brunet si se pot accesa prin "."

console.log(persoana.nume); // afiseaza numele
console.log(persoana.varsta); //afiseaza varsta
// metoda newObject()

const persoana2 = new Object();

persoana2.nume = "Toma";
persoana2.prenume = "Andrei";
persoana2.varsta = 21;

// Objects iterables sunt obiecte prin care putem itera folosind for of sau traditional o structura repetitiva while 

const numere = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;
for (let x of numere){     // parcurgem array ul numere si facem suma lor, la final afisam suma obiectelor din array;
        suma += x;
}
console.log(suma);

// Deepcopy , pentru a asigna o valoare a unui obiect catre alt obiect avem variantele de shallow copy si deep copy
//folosind shallow copy trimitem adresa obiectului ceea ce inseamna ca modificarea copiei va modifica obiectul in sine
// de aceea este important sa folosim deep copy, pentru a face asta putem folosi operatorul spread (...)
const clonaPersoana = {...persoana};
console.log(clonaPersoana);
// copiai "clona persoana "  a primit valoriele si proprietatile obiectului persoana
clonaPersoana.varsta = 25;
console.log(persoana);
console.log(clonaPersoana);
console.log(persoana);
//Putem observa ca desi am schimbat varsta clonei, nu s a schimbat varsta din obiectul persoana initial

//Punctul 1.5 Arrays, un Array este o variabila speciala ce poate retine mai multe valori
// o practica comuna este declararea array ului folosind const, desi folosim const, aceasta este o constanta la adresa ceea ce ne permite sa schimbam pe parcurs elementele din acea adresa

const carti =["Fram", "ColtAlb","Zbor","Pasare"];

// Array methods 
// pop() elimina ultimul element din array si returneaza valoarea lui;
let carte = carti.pop(); // carte primeste valoarea "pasare" si array ul devine ""Fram", "ColtAlb","Zbor""
// push() adauga la final un nou element in array si returneaza lungimea array ului
let lungie = carti.push("NeverEnough"); // lungime devine 4 si array ul "Fram", "ColtAlb","Zbor","NeverEnough"

// shift() elimina primul element si muta celelalte elemente pe un index inferior
// returneaza primul element eliminat

const fructe = ["Mere", "Pere", "Banane","Rosii","Mango"];
let fruct = fructe.shift(); // fruct ia valoarea Mere iar array ul devine "Pere", "Banane","Rosii","Mango"
console.log(fructe);
// unshift() adauga un element la inceputul array ului si muta celalalte elemente la dreapta
// returneaza lungimea arrayului;
fructe.unshift("kiwi"); // array ul devine  "kiwi" "Pere", "Banane","Rosii","Mango"

// concat() concateneaza doua array-uri

const newArray = carti.concat(fructe); // am creat un array de carti si fructe pentru o dupa-amiaza placuta :""Fram", "ColtAlb","Zbor","NeverEnough"  "kiwi" "Pere", "Banane","Rosii","Mango" " 

// splice() adauga in array noi elemente pe o pozitie aleasa si poate elimina elementele din aceea pozitie sau le poate muta pentru a face loc noilor elemente;

const materii = ["Sql", "Java", "OOP","Engleza"];
materii.splice(2, 0, "StructuriDeDate", "C#" ); // Primul parametru ne spune pe ce pozitie adauga, al doilea cate elemente elimina, iar ultimele 2 ce elemente adaugam
// array ul devine "Sql", "Java","StructuriDeDate", "C#" , "OOP","Engleza"

// folosindu-ne de parametrii din splice putem elimina elemente din array fara a lasa goluri 
materii.splice(0,1); // "Am eliminat de pe pozitia "0" un element;
console.log(materii);// Se observa ca Array ul materii contine acum urmatoarele  "Java","StructuriDeDate", "C#" , "OOP","Engleza"

// Metoda slice() scoate intr-un nou array o bucata din alt array;

const limbiStraine = materii.slice(4); // formeaza array ul cu un singur element "Engleza"

// Arrays accesor, pentru accesa un element dintr un array ne folosim de indexul, indexarea incepand de la 0 acestuia exemplu :

let carteNoua = carti[3]; // variabila primeste valoarea accesata la pozitia 3 "Zbor"
 console.log(carteNoua);

 // Array iteration methods, apeleaza o functie pentru fiecare element din array
//Arrays forEach apeleaza o functie odata pentru fiecare element

const numbers = [45, 4, 9, 16, 25];
let txt = " ";
numbers.forEach(myFunction);

function myFunction(value) {    // txt devine 45 4 9 16 25
  txt += value + "  ";
}
console.log(txt);

// Array map() method opereaza o functie pentru fiecare element din array creand un nou array 
{
const numbers1 = [25, 13, 49, 27, 69];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {     // In acest exemplu metoda map() inmulteste cu 10 fiecare element din arrayul numbers1 si creaaza array ul numbers2 cu valorile obtinute
  return value * 10;
}

console.log(numbers2);
}

// Array filter creaza un nou array cu elementele din primul array care trec indeplinesc o conditie
{
const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction);

function myFunction(value, index, array) {        // folosind metoda filter, am creat arrayul over18 care contine numerele din array ul numbers3 mai mari strict decat 18;
  return value > 18;
}
console.log(over18);
}


// Punctul 1.6 Callbacks, a callback este o functie transferata ca argument catre alta functie
// Aceasta tehnica permite o functie sa apele o alta functie
//In exemplu urmator vom avea o functie de afisare si o functie de calcul suma prin care vom apela si functia de afisare;
{
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {      //aceasta functie calculeaza suma a doua numere si face callback catre functia de afisare
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

}

//Promises in javascript sunt folosite pentru a manevra operatii asincron
//Promises au 4 stagii :
/* 1 fulfilled (implinita )- actiunea promisa s-a intamplat/este acceptat
   2 rejected (respinsa)- actiunea promisa a esuat
   3 pending (in asteptare)- actiunea promisa asteapta sa se intampale
   4 settled - codul s-a finalizat prin accept/reject- actiunea s a intmplat  
*/

{

var promise = new Promise(function(resolve, reject) {
    const x = "exempluDeTest";
    const y = "exempluDeTest"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, Testele au mers');
      }).
      catch(function () {
          console.log('Eroare');
      });

    }

//  Async/Await permite promisiunilor asincron sa ruleze de parca ar fi sincronizate    
//  se asigura ca o promisiune este este returnata si daca nu atunci javascript o transfomra intr-o promisiune ce returneaza o valoare    
// Exemplu 1 async :
{
const getData = async() => {
    var data = "Hello World";
    return data;
}
 
getData().then(data => console.log(data));

}

//await function este folosita pentru a astepta promisiunea, se poate folosi doar in blocul async
// Face codul sa astepte pana cand promisiunea se rezolva
//Exemplu:

{
const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);

}

// Exemplu Async/Await

{
function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(" Promisiune");
      }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);    // output : Hello Promisiune
    return combined_promise;
  }
   
  async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
  }
   
  display();



}

// 1.8 Closures, closures permit accesul in unei functii din interiorul scope-ului catre exterior, facand variabilele vizibile
// Exemplu1 :
{
function init() {
    var name = 'Test1'; // name este variabila locala creata de functia init
    function displayName() {
      // displayName() este functia interioara closure
      console.log(name); // foloseste variabila declarata in functia parinte
    }
    displayName();
  }
  init();
}
// Exemplu2 desi functia interioara este returnata prin functia exterioara inainte sa se execute, aceasta afiseaza datoria propietatii de closure;
{
function makeFunc() {
    const name = 'Test2';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
}


















