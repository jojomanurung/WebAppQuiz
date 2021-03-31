import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppQuizComponent } from './home-app-quiz.component';

describe('HomeAppQuizComponent', () => {
  let component: HomeAppQuizComponent;
  let fixture: ComponentFixture<HomeAppQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAppQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAppQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
