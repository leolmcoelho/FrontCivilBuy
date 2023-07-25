import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosNoneComponent } from './pedidos-none.component';

describe('PedidosNoneComponent', () => {
  let component: PedidosNoneComponent;
  let fixture: ComponentFixture<PedidosNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosNoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
