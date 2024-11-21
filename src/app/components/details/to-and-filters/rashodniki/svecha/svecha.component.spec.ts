import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvechaComponent } from './svecha.component';

describe('SvechaComponent', () => {
  let component: SvechaComponent;
  let fixture: ComponentFixture<SvechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
