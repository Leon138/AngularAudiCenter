import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrKorobkiComponent } from './filtr-korobki.component';

describe('FiltrKorobkiComponent', () => {
  let component: FiltrKorobkiComponent;
  let fixture: ComponentFixture<FiltrKorobkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrKorobkiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrKorobkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
