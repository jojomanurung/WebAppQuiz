import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreAppQuizComponent } from './highscore-app-quiz.component';

describe('HighscoreAppQuizComponent', () => {
  let component: HighscoreAppQuizComponent;
  let fixture: ComponentFixture<HighscoreAppQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighscoreAppQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreAppQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
