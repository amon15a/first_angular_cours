 import { Component,input,output } from '@angular/core';
 import { UpperCasePipe,DecimalPipe } from '@angular/common';
 import { Produit } from '../produit/produit';
        @Component({  
             selector: 'app-carte-produit',
               imports: [UpperCasePipe,DecimalPipe],   
                 templateUrl: './carte-produit.html',
                      styleUrl: './carte-produit.css'   
                    }) 
                      export class CarteProduit {
                                produit = input.required<Produit>(); 
                                ajout = output<Produit>(); 
                                 signalerAjout(): void {
                                              this.ajout.emit(this.produit()); 
                                          } }