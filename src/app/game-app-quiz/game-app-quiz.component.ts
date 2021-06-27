import { Component, OnInit } from '@angular/core';
import { OpenTriviaDbService } from '../service/open-trivia-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-app-quiz',
  templateUrl: './game-app-quiz.component.html',
  styleUrls: ['./game-app-quiz.component.css']
})
export class GameAppQuizComponent implements OnInit {
  isLoading = false;

  questions: any = []

  currentQuestion: any;
  availableQuestions: any;
  score = 0;
  questionCounter = 0;

  CORRECT_BONUS = 10;
  MAX_QUESTIONS = 5;

  progressText = '';
  progressBar: any;
  questionText: any;
  scoreText = 0;

  choices = Array.from(document.getElementsByClassName("choice-text"));

  constructor(private apiDB: OpenTriviaDbService, private router: Router) {
  }

  ngOnInit() {
    this.getQuestion();
    console.log((this.choices));

  }

  getQuestion() {
    this.isLoading = true;
    this.apiDB.getQuiz().subscribe((resp: any) => {
      console.log(resp);
      this.questions = resp.results.map((res: any) => {
        // Tampung dulu question-nya terus buat answer dengan nilai random
        let ans: any = {
          question: res.question,
          answer: Math.floor(Math.random() * 4) + 1,
        };

        // tampung juga incorrect_answer
        const answerQuestion = [...res.incorrect_answers];

        // masukkan correct_answer ke array answerQuestion
        answerQuestion.splice(ans.answer - 1, 0, res.correct_answer);

        answerQuestion.forEach((choices: any, index) => {
          return ans["choice" + (index + 1)] = choices
          /*
            buat nama item array dengan choice + indexnya + 1
            jadi misal indexnya = 0 maka 0 + 1 = 1 dan indexnya jadi 1
            maka hasilnya choice1, choice2, dst.
            kemudian return ke object ans
          */
        });
        return ans
      });
      console.log(this.questions);
      this.isLoading = false;
      this.startGame();
    });
  }

  startGame() {
    this.questionCounter = 0;
    this.score = 0;
    this.availableQuestions = [... this.questions];
    this.getNewQuestion();
  };

  getNewQuestion() {
    if (this.availableQuestions.length === 0 || this.questionCounter >= this.MAX_QUESTIONS) {
      // localStorage.setItem("mostRecentScore", this.score);
      //go to the end page
      this.router.navigate(['result']);
    }
    this.questionCounter++;
    this.progressText = `Question ${this.questionCounter}/${this.MAX_QUESTIONS}`;

    //update the progress bar
    this.progressBar = (this.questionCounter / this.MAX_QUESTIONS) * 100;

    const questionIndex = Math.floor(Math.random() * this.availableQuestions.length);
    this.currentQuestion = this.availableQuestions[questionIndex];
    this.questionText = this.currentQuestion.question;


    this.availableQuestions.splice(questionIndex, 1);

    // this.acceptingAnswers = true;
  };

  chooseAnswer(data: any) {
    if (data === this.currentQuestion.answer) {
      this.incrementScore(this.CORRECT_BONUS);
    }
    // const selectedChoice = e.target;
    // const selectedAnswer = selectedChoice.data['number'];

    // const classToApply =
    //     selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    //to increment Score number in HUD
    //     if (classToApply === 'correct') {
    //         this.incrementScore(this.CORRECT_BONUS);
    //     }

    // selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      // selectedChoice.parentElement.classList.remove(classToApply);
      this.getNewQuestion();
    }, 1000);

  }

  //this is declaration of incrementScore as num
  incrementScore(score: number) {
    this.score += score;
    this.scoreText = score;
  }

}
