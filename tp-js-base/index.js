// //exercice1
// var x=5
// let y=10
// const z=15

// x=10
// console.log(x)
// y=5
// console.log(y)
// // on ne peut pas modifier le z parceque const

// //exercice2
// function testScope() { 
// if (true) { 
// var a = "var visible partout"; 
// let b = "let visible ici seulement"; 
// } 
// console.log(a); 
// console.log(b); // Pourquoi erreur ? 
// //erreur parceque b variable local
// } 
// //testScope(); 

// //exercice3
// function sayHello(name) { 
// return ⁠ Bonjour ${name} ⁠; 
// } 
// const sayHelloArrow = (name) => ⁠ Bonjour ${name} ⁠;
// console.log(sayHello("marwa"));
// console.log(sayHelloArrow("maram"));
// //les deux fcts donnent la mm resultat ms juste une classique et une fleche


// //exercice4
// const person = { 
//   name: "Sara", 
//   sayHello: function () { 
//     console.log("Bonjour " + this.name); 
//   }, 
//   sayHelloArrow: () => { 
//     console.log("Bonjour " + this.name); 
//   }, 
// }; 
 
// person.sayHello(); 
// person.sayHelloArrow(); 
// // le fait de this ici fonctionne que dans une fonction classique ms pas dans une fonction flechee


 // index.js 
// import message, { PI, carre } from "./mathUtils.js"; 
 
// message(); //  Module mathUtils chargé ! 
// console.log("PI =", PI); 
// console.log("Carré de 5 =", carre(5)); 
// //exercice5

// const fruits = ["pomme", "banane", "orange"]; 
// fruits.push("kiwi"); //ajoute kiwi a la fin
// fruits.pop(); // supprime kiwi 
// console.log(fruits); //affichage de pomme banane orange sans kiwi prcq deja supprimee


// //exercice6
// const nums = [1, 2, 3, 4, 5]; 
// // Multiplie chaque nombre par 2 
// console.log(nums.map(n => n * 2));//map creer un nouveau tab avec le rslt d'une fct appliquee a chaque elememt 
// // Garde seulement les nombres pairs 
// console.log(nums.filter(n => n % 2 === 0)); //garde seulememt les elements qui respectent une condition
// // Calcule la somme totale 
// console.log(nums.reduce((sum, n) => sum + n, 0)); //reduit le tableau a une seule valeur ici on a la somme


// //exercice7
// console.log(nums.find(n => n > 3)); //Renvoie le premier élément du tableau qui satisfait la condition
// console.log(nums.some(n => n < 0)); //Renvoie true ou false selon si au moins un élément vérifie la condition
// console.log(nums.every(n => n > 0));//Renvoie true si tous les éléments du tableau satisfont la condition.

// exercice 8
// const user = { id: 1, name: "Ali", city: "Rabat" }; 
 
// // Déstructuration 
// const { name, city } = user; //extrait name et city
// console.log(⁠ ${name} habite à ${city} ⁠); 
 
// // Renommage 
// const { name: fullName, ...rest } = user; //renomme name en fullName et garde le reste
// console.log(fullName); 
// console.log(rest); 


//exercice9
// const p = new Promise((resolve) => { 
//   setTimeout(() => resolve("Opération terminée !"), 2000); 
// }); 
 
// p.then(result => console.log(result)); 
//Ce code crée une promesse qui simule une opération asynchrone à l’aide de setTimeout.
//Après 2 secondes, la promesse est résolue et le message "Opération terminée !" est affiché dans la console grâce à la méthode .then().


//exercice10
// async function getUsers() { 
//   try { 
//     const res = await 
// fetch("https://jsonplaceholder.typicode.com/users"); 
//     const data = await res.json(); 
//     console.log(data); 
//   } catch (e) { 
//     console.error("Erreur :", e.message); 
//   } 
// } 
 
// getUsers(); 
//Ce code utilise async/await pour récupérer et afficher des données d’une API.
//La fonction getUsers() attend la réponse de fetch, convertit le résultat en JSON, et gère les erreurs avec try...catch.


//exercice11
// const name = "Nadia"; 
// const hour = new Date().getHours(); 
// console.log(⁠ Bonjour ${name}, il est ${hour}h ⁠);
//Ce code récupère l’heure actuelle avec new Date().getHours() et affiche un message de salutation personnalisé en utilisant une chaîne de caractères avec interpolation.


//exercice12
// const arr1 = [1, 2]; 
// const arr2 = [...arr1, 3, 4]; 
// console.log(arr2); 
// function sum(...numbers) { 
// return numbers.reduce((a, b) => a + b, 0); 
// } 
// console.log(sum(1, 2, 3, 4));
//Ce code utilise le spread operator (...) pour copier et étendre un tableau,et le rest parameter (...) pour définir une fonction sum qui additionne un nombre variable d’arguments.


//exercice13
// const settings = { theme: null }; 
// console.log(settings.theme ?? "light"); // light 
// const user2 = { profile: { email: "x@y.com" } }; 
// console.log(user2.profile?.email); // x@y.com 
// console.log(user2.address?.city);  // undefined 
//Ce code utilise l’opérateur ?? pour donner une valeur par défaut si une variable est null ou undefined,et l’opérateur ?. pour accéder à des propriétés d’objets de manière sécurisée sans générer d’erreur si la propriété n’existe pas.