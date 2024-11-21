import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaslFiltersComponent } from './masl-filters.component';

describe('MaslFiltersComponent', () => {
  let component: MaslFiltersComponent;
  let fixture: ComponentFixture<MaslFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaslFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaslFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
