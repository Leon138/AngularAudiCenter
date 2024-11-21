import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPartsItemComponent } from './auto-parts-item.component';

describe('AutoPartsItemComponent', () => {
  let component: AutoPartsItemComponent;
  let fixture: ComponentFixture<AutoPartsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoPartsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoPartsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
