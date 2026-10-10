import { Component } from '@angular/core';
import { CarteProduit } from './carte-produit/carte-produit';
import { EnteteBoutique } from './entete-boutique/entete-boutique';
import { PiedPage } from './pied-page/pied-page';
import { Produit } from './produit/produit';
import { FormsModule } from '@angular/forms';
import{LowerCasePipe, SlicePipe,TitleCasePipe, UpperCasePipe,DecimalPipe, CurrencyPipe,DatePipe} from '@angular/common';


type Product = {
  name: string;
  category: string;
  price: string;
  accent: string;
  badge?: string;
};



@Component({
  selector: 'app-root',
  imports: [CarteProduit, EnteteBoutique, PiedPage,FormsModule,UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,DecimalPipe,CurrencyPipe,DatePipe], 
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   dateDuJour: Date = new Date();

  nomBoutique:string = 'GafsaShop';
  ville:string = 'Gafsa';
  nombreProduits:number = 12;
  ouvert:boolean = true;
   recherche: string = '';
  etudiant:string = 'VOTRE NOM ET PRENOM';
    produits: Produit[] = [
 { id: 1, nom: 'Dattes Deglet Nour', description: 'Recolte 2026',
 prix: 18.5, stock: 45, categorie: 'alimentaire', promotion: true },
 { id: 2, nom: 'Huile d\'olive extra vierge', description: 'Bidon 5 L',
 prix: 62, stock: 12, categorie: 'alimentaire', promotion: false },
 { id: 3, nom: 'Tapis de Gafsa', description: 'Tisse main, 2 m sur 3 m',
 prix: 450, stock: 0, categorie: 'artisanat', promotion: false },
 { id: 4, nom: 'Poterie de Sejnane', description: 'Piece decorative',
 prix: 95, stock: 3, categorie: 'artisanat', promotion: true },
 { id: 5, nom: 'Miel de montagne', description: 'Pot de 500 g',
 prix: 34, stock: 28, categorie: 'alimentaire', promotion: false }
 ];
  panier: Produit[] = [];

 ajouterAuPanier(produit: Produit): void {
 this.panier.push(produit);
 console.log(this.panier.length + ' article(s) dans le panier');
 }
 produitsFiltres(): Produit[] {
 const terme = this.recherche.toLowerCase().trim();
 if (terme === '') {
 return this.produits;
 }
 return this.produits.filter(p => p.nom.toLowerCase().includes(terme));
 }


}
