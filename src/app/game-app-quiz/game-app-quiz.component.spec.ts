import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppQuizComponent } from './game-app-quiz.component';

describe('GameAppQuizComponent', () => {
  let component: GameAppQuizComponent;
  let fixture: ComponentFixture<GameAppQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAppQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAppQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
