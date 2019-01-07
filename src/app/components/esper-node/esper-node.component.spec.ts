import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperNodeComponent } from './esper-node.component';

describe('EsperNodeComponent', () => {
  let component: EsperNodeComponent;
  let fixture: ComponentFixture<EsperNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsperNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
