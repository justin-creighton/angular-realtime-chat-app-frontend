import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConversationPageComponent } from './new-conversation-page.component';

describe('NewConversationPageComponent', () => {
  let component: NewConversationPageComponent;
  let fixture: ComponentFixture<NewConversationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewConversationPageComponent]
    });
    fixture = TestBed.createComponent(NewConversationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
