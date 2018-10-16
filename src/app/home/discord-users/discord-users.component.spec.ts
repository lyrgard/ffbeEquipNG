import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordUsersComponent } from './discord-users.component';

describe('DiscordUsersComponent', () => {
  let component: DiscordUsersComponent;
  let fixture: ComponentFixture<DiscordUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
