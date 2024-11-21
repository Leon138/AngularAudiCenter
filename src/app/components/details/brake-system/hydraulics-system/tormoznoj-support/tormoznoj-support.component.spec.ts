import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TormoznojSupportComponent } from './tormoznoj-support.component';

describe('TormoznojSupportComponent', () => {
  let component: TormoznojSupportComponent;
  let fixture: ComponentFixture<TormoznojSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TormoznojSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TormoznojSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
