import { Component, OnInit } from '@angular/core';
import { OpenTriviaDbService } from '../service/open-trivia-db.service';

@Component({
  selector: 'app-game-app-quiz',
  templateUrl: './game-app-quiz.component.html',
  styleUrls: ['./game-app-quiz.component.css']
})
export class GameAppQuizComponent implements OnInit {
  show = false;
  game = true;

  tempData: any = [];
  allQuiz: any = [];

  constructor(private apiDB: OpenTriviaDbService) {
  }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.apiDB.getQuiz().subscribe((resp: any) => {
      this.tempData.push(resp['results']);
      console.log(this.tempData);
      if (this.tempData && this.tempData[0] && this.tempData[0].length) {
        this.tempData.map((res: any) => {
          res.forEach((element: any) => {
            const items = {
              question: element.question,
              choices: element.incorrect_answers.concat(element.correct_answer),
              correct_answer: element.correct_answer
            };
            this.allQuiz.push(items);
          });
        });
      };
      console.log(this.allQuiz);
    });
  }

}
