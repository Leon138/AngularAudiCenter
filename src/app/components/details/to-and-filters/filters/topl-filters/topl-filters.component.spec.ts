import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplFiltersComponent } from './topl-filters.component';

describe('ToplFiltersComponent', () => {
  let component: ToplFiltersComponent;
  let fixture: ComponentFixture<ToplFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToplFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToplFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
