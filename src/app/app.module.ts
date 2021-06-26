import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeAppQuizComponent } from './home-app-quiz/home-app-quiz.component';
import { GameAppQuizComponent } from './game-app-quiz/game-app-quiz.component';
import { HighscoreAppQuizComponent } from './highscore-app-quiz/highscore-app-quiz.component';
import { EndAppQuizComponent } from './end-app-quiz/end-app-quiz.component';

// Material Angular //
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppQuizComponent,
    GameAppQuizComponent,
    HighscoreAppQuizComponent,
    EndAppQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
