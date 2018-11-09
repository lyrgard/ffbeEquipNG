import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInventoryComponent } from './item-inventory.component';

describe('ItemInventoryComponent', () => {
  let component: ItemInventoryComponent;
  let fixture: ComponentFixture<ItemInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
