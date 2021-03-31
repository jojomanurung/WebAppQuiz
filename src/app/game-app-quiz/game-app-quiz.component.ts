import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-app-quiz',
  templateUrl: './game-app-quiz.component.html',
  styleUrls: ['./game-app-quiz.component.css']
})
export class GameAppQuizComponent implements OnInit {
  show = false;
  game = true;
  value = 50;
  constructor() {
  }

  ngOnInit(): void {
  }

}
