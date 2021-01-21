import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmoviesComponent } from './allmovies.component';

describe('AllmoviesComponent', () => {
  let component: AllmoviesComponent;
  let fixture: ComponentFixture<AllmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
