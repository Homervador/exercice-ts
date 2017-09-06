/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function isTrue(valeur: boolean): boolean {
	return valeur;
}

function nombre(valeur: number): number {
	return valeur;
}

function texte(valeur: number): string {
	return 'toto';
}

function tableau(valeur: number[]): [string, number] {
	return ['toto', 6];
}

enum Couleur {Cyan = 2, Jaune = 5, Magenta = 7}

function colorier(valeur: number): Couleur{
	return Couleur.Cyan;
}
function tout(valeur: any): any {
	return valeur;
}

function rien(): void{

}
function jamais(): never {
	while(true){

	}
}
