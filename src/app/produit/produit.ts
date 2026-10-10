import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produit',
  styleUrl: './produit.css',
  templateUrl: './produit.html',
})
export class Produit {}
 export interface Produit {
 id: number;
 nom: string;
 description: string;
 prix: number;
 stock: number;
 categorie: string;
 promotion: boolean;
 }
