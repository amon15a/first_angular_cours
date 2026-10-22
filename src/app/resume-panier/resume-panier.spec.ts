import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumePanier } from './resume-panier';

describe('ResumePanier', () => {
  let component: ResumePanier;
  let fixture: ComponentFixture<ResumePanier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePanier],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePanier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
