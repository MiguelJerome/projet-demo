// Importation de modules
import { createInterface } from 'readline/promises';
import { readFile, writeFile } from 'fs/promises';

// Création d'une interface de lecture pour lire dans la console
const readInterface = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Affichage dans la console
console.log('Hello World');

// Lecture dans la console
let nom = await readInterface.question('Quel est votre nom? ');
console.log('Bonjour ' + nom);

// Lecture d'un fichier
let data = await readFile('./temp.txt');
let texte = data.toString();
console.log(texte);

// Fermeture de l'interface de lecture pour que le programme se termine correctement
readInterface.close();
