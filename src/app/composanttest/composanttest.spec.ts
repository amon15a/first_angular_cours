import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Composanttest } from './composanttest';

describe('Composanttest', () => {
  let component: Composanttest;
  let fixture: ComponentFixture<Composanttest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composanttest],
    }).compileComponents();

    fixture = TestBed.createComponent(Composanttest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
