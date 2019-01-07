import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperGridComponent } from './esper-grid.component';

describe('EsperGridComponent', () => {
  let component: EsperGridComponent;
  let fixture: ComponentFixture<EsperGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsperGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
