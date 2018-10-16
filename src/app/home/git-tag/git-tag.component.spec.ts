import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTagComponent } from './git-tag.component';

describe('GitTagComponent', () => {
  let component: GitTagComponent;
  let fixture: ComponentFixture<GitTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
