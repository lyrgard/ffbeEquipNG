import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperScreenComponent } from './esper-screen.component';

describe('EsperScreenComponent', () => {
  let component: EsperScreenComponent;
  let fixture: ComponentFixture<EsperScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsperScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
