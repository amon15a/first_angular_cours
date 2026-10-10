 import { Component } from '@angular/core';
        @Component({     selector: 'app-carte-produit',
               imports: [],   
                 templateUrl: './carte-produit.html',
                      styleUrl: './carte-produit.css'   
                    }) 
                      export class CarteProduit {
                             nom: string = 'Dattes Deglet Nour';
                                  description: string = 'Dattes de premiere qualite, recolte 2026.';
                                       prix: number = 18.5;
                                            stock: number = 45;   
                                          } 