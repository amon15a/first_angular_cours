import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-entete-boutique',
  styleUrl: './entete-boutique.css',
  templateUrl: './entete-boutique.html',
})
export class EnteteBoutique {
  titre: string= 'GafsaShop';
  slogan: string = 'Votre boutique en ligne de produits locaux';
  anneeCreation: number=2026;
}
