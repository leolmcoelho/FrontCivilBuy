import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowArrowComponent } from './yellow-arrow.component';

describe('YellowArrowComponent', () => {
  let component: YellowArrowComponent;
  let fixture: ComponentFixture<YellowArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
