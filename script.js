// Exercice 1

5 >= 1
// prediction : true
// outputs : true
0 === 1
// prediction : false
// outputs : false
4 <= 1
// prediction : false
// outputs : false
1 != 1
// prediction : false
// outputs : false
"A" > "B"
// prediction : false
// outputs : false
"B" < "C"
// prediction : true
// outputs : true
"a" > "A"
// prediction : true
// outputs : true
"b" < "A"
// prediction : false
// outputs : false
true === false
// prediction : false
// outputs : false
true != true
// prediction : false
// outputs : false

// Exercice 2

let chiffre = prompt("Entrez des chiffres séparé par des virgule :");

let chiffreTab = chiffre.split(",");

let somme = 0;

for (let i = 0; i < chiffreTab.length; i++) {

    somme += parseInt(chiffreTab[i]);
    
}
console.log(somme);

// Exercice 3

let phrase = prompt("Entrez une phrase contenant le mot Nemo :");

let index = phrase.indexOf("Nemo");

console.log((index != -1) ? "Trouvé" : "Nemo non trouvé");

// Exercice 4
const result = "boum";

let user = prompt("Saisissez un nombre :");

if (user < 2) {

    console.log(result);

} else if(user > 2 ) {

    if(user % 2 == 0 && user % 5 == 0) {

        console.log((result+"!").toUpperCase());

    }
    else if(user % 5 == 0) {

        console.log(result.toUpperCase());

    }
    else if(user % 2 == 0 ) {

        console.log(result + "!");

    }
    else {

        console.log(" la chaîne doit comporter n nombre de 'o' (n étant le nombre donné)")

    }
}

