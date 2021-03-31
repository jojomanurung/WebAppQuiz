import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndAppQuizComponent } from './end-app-quiz.component';

describe('EndAppQuizComponent', () => {
  let component: EndAppQuizComponent;
  let fixture: ComponentFixture<EndAppQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndAppQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndAppQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
