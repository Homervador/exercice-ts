/*
Partie 1
Créer une classe Personne avec deux attributs : nom et prenom
et une methode permettant à la personne de se présenter au travers d'un
message dans la console.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.sePresenter = function () {
        console.log("Salut je m'appelle " + this.nom + " " + this.prenom);
    };
    return Personne;
}());
/*
Partie 2
Créer une classe étudiant, héritant de la classe personne
Ajout un attribut cursus sur l'étudiant prenant valeur dans un énumération
de votre création.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github

*/
var Cursus;
(function (Cursus) {
    Cursus[Cursus["Perle"] = 0] = "Perle";
    Cursus[Cursus["Poterie"] = 1] = "Poterie";
    Cursus[Cursus["Macramer"] = 2] = "Macramer";
})(Cursus || (Cursus = {}));
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Etudiant;
}(Personne));
