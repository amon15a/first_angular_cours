import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnteteBoutique } from './entete-boutique';

describe('EnteteBoutique', () => {
  let component: EnteteBoutique;
  let fixture: ComponentFixture<EnteteBoutique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnteteBoutique],
    }).compileComponents();

    fixture = TestBed.createComponent(EnteteBoutique);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
