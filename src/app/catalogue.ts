import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { Produit } from './produit/produit';

@Injectable({ providedIn: 'root' })
export class Catalogue {
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
 tous(): Produit[]
  {       return this.produits;     } 
      rechercher(terme: string): Produit[]
       {       const mot = terme.toLowerCase().trim();
        if (mot === '') 
            {         return this.produits;       }
         return this.produits.filter(p => p.nom.toLowerCase().includes(mot));    
         }   
    parCategorie(categorie: string): Produit[] {
  return this.produits.filter(p => p.categorie === categorie);
}
       

}
