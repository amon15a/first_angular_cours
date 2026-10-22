import { Component,inject } from '@angular/core';
import{Panier} from '../panier';

@Component({
  imports: [],
  selector: 'app-pied-page',
  styleUrl: './pied-page.css',
  templateUrl: './pied-page.html',
})
export class PiedPage {
   panier = inject(Panier); 
     links: string[] = [
        'A propos',
        'Contact',
        'livraison',
                     ];
}
