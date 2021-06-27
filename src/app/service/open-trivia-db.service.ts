import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class OpenTriviaDbService {
  questionURL = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

  constructor(
    private http: HttpClient,
  ) { }

  getQuiz() {
    return this.http.get(this.questionURL, { responseType: 'json' }).pipe(
      catchError(this.handleError('getQuiz', []))
    );
  }

  private handleError(operation = 'operation', result?: any) {
    return (error: any) => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

}
