import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSalonaComponent } from './filters-salona.component';

describe('FiltersSalonaComponent', () => {
  let component: FiltersSalonaComponent;
  let fixture: ComponentFixture<FiltersSalonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersSalonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersSalonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
