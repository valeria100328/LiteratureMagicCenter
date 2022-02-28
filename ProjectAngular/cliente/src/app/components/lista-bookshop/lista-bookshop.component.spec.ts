import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBookshopComponent } from './lista-bookshop.component';

describe('ListaBookshopComponent', () => {
  let component: ListaBookshopComponent;
  let fixture: ComponentFixture<ListaBookshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBookshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
