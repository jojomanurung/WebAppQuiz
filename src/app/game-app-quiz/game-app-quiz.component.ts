import { Component, OnInit, Renderer2 } from '@angular/core';
import { OpenTriviaDbService } from '../service/open-trivia-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-app-quiz',
  templateUrl: './game-app-quiz.component.html',
  styleUrls: ['./game-app-quiz.component.css']
})
export class GameAppQuizComponent implements OnInit {

  constructor(
    private apiDB: OpenTriviaDbService,
    private router: Router,
    private render: Renderer2,
  ) {
  }

  ngOnInit() {
  }



}
