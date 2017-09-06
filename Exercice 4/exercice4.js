/*
Nous souhaitons écrire une fonction permettant de
calculer la somme des chiffres contenus dans un tableau bi-dimensionnel

Notre première fonction (ci-dessous) ne donne pas le résultat escompté

1. Expliquer pourquoi
2. Proposer une correction

3. Proposer une solution avec uniquement var
4. Proposer une solution avec uniquemnet let
*/
function sommeTableau(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        var ligne = tableau[i];
        for (var i = 0; i < ligne.length; i++) {
            somme += ligne[i];
        }
    }
    return somme;
}
// le code de test qui révèle le problème
var tab = [[0, 1], [2, 3]];
var total = sommeTableau(tab);
console.log(total); // outputs 1
//3.
function sommeTableauVar(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        var ligne = tableau[i];
        for (var j = 0; j < ligne.length; j++) {
            somme += ligne[j];
        }
    }
    return somme;
}
//4.
function sommeTableauLet(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        var ligne = tableau[i];
        for (var i_1 = 0; i_1 < ligne.length; i_1++) {
            somme += ligne[i_1];
        }
    }
    return somme;
}
