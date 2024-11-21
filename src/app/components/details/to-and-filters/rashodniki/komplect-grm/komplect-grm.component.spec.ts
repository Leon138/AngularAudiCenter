import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomplectGrmComponent } from './komplect-grm.component';

describe('KomplectGrmComponent', () => {
  let component: KomplectGrmComponent;
  let fixture: ComponentFixture<KomplectGrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomplectGrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomplectGrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
