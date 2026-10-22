import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-composant-test',
  templateUrl: './composanttest.html',
  styleUrl: './composanttest.css',
})
export class ComposantTest implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Composant cree');
  }

  ngOnDestroy(): void {
    console.log('Composant detruit');
  }
}