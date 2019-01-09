import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitStarsComponent } from './unit-stars.component';

describe('UnitStarsComponent', () => {
  let component: UnitStarsComponent;
  let fixture: ComponentFixture<UnitStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
