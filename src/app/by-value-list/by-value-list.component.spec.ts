import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByValueListComponent } from './by-value-list.component';

describe('ByValueListComponent', () => {
  let component: ByValueListComponent;
  let fixture: ComponentFixture<ByValueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByValueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
