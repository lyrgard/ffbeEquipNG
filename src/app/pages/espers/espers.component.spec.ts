import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspersComponent } from './espers.component';

describe('EspersComponent', () => {
  let component: EspersComponent;
  let fixture: ComponentFixture<EspersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
