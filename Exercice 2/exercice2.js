/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function isTrue(valeur) {
    return valeur;
}
function nombre(valeur) {
    return valeur;
}
function texte(valeur) {
    return 'toto';
}
function tableau(valeur) {
    return ['toto', 6];
}
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Cyan"] = 2] = "Cyan";
    Couleur[Couleur["Jaune"] = 5] = "Jaune";
    Couleur[Couleur["Magenta"] = 7] = "Magenta";
})(Couleur || (Couleur = {}));
function colorier(valeur) {
    return Couleur.Cyan;
}
function tout(valeur) {
    return valeur;
}
function rien() {
}
function jamais() {
    while (true) {
    }
}
