import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTileComponent } from './unit-tile.component';

describe('UnitTileComponent', () => {
  let component: UnitTileComponent;
  let fixture: ComponentFixture<UnitTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
