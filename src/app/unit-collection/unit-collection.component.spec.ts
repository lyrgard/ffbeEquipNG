import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCollectionComponent } from './unit-collection.component';

describe('UnitCollectionComponent', () => {
  let component: UnitCollectionComponent;
  let fixture: ComponentFixture<UnitCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
