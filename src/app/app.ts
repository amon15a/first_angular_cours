import { Component, inject, OnInit } from '@angular/core';
import { CarteProduit } from './carte-produit/carte-produit';
import { EnteteBoutique } from './entete-boutique/entete-boutique';
import { PiedPage } from './pied-page/pied-page';
import { Produit } from './produit/produit';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Panier } from './panier';
import { Catalogue } from './catalogue';
import { ResumePanier } from './resume-panier/resume-panier';
import { ComposantTest } from './composanttest/composanttest';

@Component({
  selector: 'app-root',
  imports: [CarteProduit, ComposantTest, ResumePanier, EnteteBoutique, PiedPage, FormsModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  afficherTest: boolean = false;

basculerTest(): void {
  this.afficherTest = !this.afficherTest;
}
  produitSelectionne: Produit | null = null;

afficherDetail(produit: Produit): void {
  this.produitSelectionne = produit;
}
  panier = inject(Panier);
  catalogue = inject(Catalogue);

  dateDuJour: Date = new Date();
  nomBoutique: string = 'GafsaShop';
  ville: string = 'Gafsa';
  ouvert: boolean = true;
  etudiant: string = 'VOTRE NOM ET PRENOM';

  recherche: string = '';
  maxx: number = 1000;
  produits: Produit[] = [];

  ngOnInit(): void {
    this.produits = this.catalogue.tous();
    console.log('Composant racine initialise');
  }

  produitsFiltres(): Produit[] {
    return this.catalogue
      .rechercher(this.recherche)
      .filter(p => p.prix <= this.maxx);
  }

  ajouterAuPanier(produit: Produit): void {
    this.panier.ajouter(produit);
  }

  viderPanier(): void {
    this.panier.vider();
    console.log('Panier vidé');
  }

  trie(): void {
    this.produits.sort((a, b) => a.prix - b.prix);
    console.log('Catalogue trié par prix croissant');

  }
  nombreArtisanat(): number {
  return this.catalogue.parCategorie('artisanat').length;
}
} 