import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AilmentElementListComponent } from './ailment-element-list.component';

describe('AilmentElementListComponent', () => {
  let component: AilmentElementListComponent;
  let fixture: ComponentFixture<AilmentElementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AilmentElementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AilmentElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
