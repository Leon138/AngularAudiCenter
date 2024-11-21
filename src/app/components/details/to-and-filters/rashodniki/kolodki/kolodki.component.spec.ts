import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolodkiComponent } from './kolodki.component';

describe('KolodkiComponent', () => {
  let component: KolodkiComponent;
  let fixture: ComponentFixture<KolodkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolodkiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolodkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
