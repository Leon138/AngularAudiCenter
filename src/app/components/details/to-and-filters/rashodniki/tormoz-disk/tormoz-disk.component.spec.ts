import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TormozDiskComponent } from './tormoz-disk.component';

describe('TormozDiskComponent', () => {
  let component: TormozDiskComponent;
  let fixture: ComponentFixture<TormozDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TormozDiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TormozDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
