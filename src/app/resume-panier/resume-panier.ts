import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Panier } from '../panier';

@Component({
  selector: 'app-resume-panier',
  imports: [DecimalPipe],
  templateUrl: './resume-panier.html',
  styleUrl: './resume-panier.css',
})
export class ResumePanier {
  panier = inject(Panier);
}