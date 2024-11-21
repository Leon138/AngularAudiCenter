import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorshensComponent } from './porshens.component';

describe('PorshensComponent', () => {
  let component: PorshensComponent;
  let fixture: ComponentFixture<PorshensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorshensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorshensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
