import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemenGrmComponent } from './remen-grm.component';

describe('RemenGrmComponent', () => {
  let component: RemenGrmComponent;
  let fixture: ComponentFixture<RemenGrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemenGrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemenGrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
