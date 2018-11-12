import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEnhancementComponent } from './item-enhancement.component';

describe('ItemEnhancementComponent', () => {
  let component: ItemEnhancementComponent;
  let fixture: ComponentFixture<ItemEnhancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEnhancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
