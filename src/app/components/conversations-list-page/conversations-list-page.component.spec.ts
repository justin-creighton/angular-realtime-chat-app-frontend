import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsListPageComponent } from './conversations-list-page.component';

describe('ConversationsListPageComponent', () => {
  let component: ConversationsListPageComponent;
  let fixture: ComponentFixture<ConversationsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationsListPageComponent]
    });
    fixture = TestBed.createComponent(ConversationsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
