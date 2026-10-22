import { Service } from '@angular/core';
  // AJOUT : signal et computer viennent d'Angular
   import { Injectable, signal, computed } from '@angular/core';
    import { Produit } from './produit/produit';
      @Injectable({ providedIn: 'root' })
       export class Panier { private articles = signal<Produit[]>([]); 
       nombreArticles = computed(() => this.articles().length);
       total = computed(() => this.articles().reduce((s, p) => s + p.prix, 0));
       constructor() {
        console.log('Service panier construit');  
     }
     ajouter(produit: Produit): void {
     this.articles.update(liste => [...liste, produit]);
       }
        vider(): void 
    {     this.articles.set([]);   } 
    retirer(produit: Produit): void {
  this.articles.update(liste => {
    const i = liste.findIndex(p => p.id === produit.id);
    return i === -1 ? liste : [...liste.slice(0, i), ...liste.slice(i + 1)];
  });
}
  } 