import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSearchComponent } from './unit-search.component';

describe('UnitSearchComponent', () => {
  let component: UnitSearchComponent;
  let fixture: ComponentFixture<UnitSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
