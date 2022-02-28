import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBookshopComponent } from './registro-bookshop.component';

describe('RegistroBookshopComponent', () => {
  let component: RegistroBookshopComponent;
  let fixture: ComponentFixture<RegistroBookshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroBookshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
