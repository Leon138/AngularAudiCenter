import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiModelsComponent } from './audi-models.component';

describe('AudiModelsComponent', () => {
  let component: AudiModelsComponent;
  let fixture: ComponentFixture<AudiModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
