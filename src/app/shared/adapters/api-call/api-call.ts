import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiCall {
  baseUrl = "http://localhost:3000/api/v1/"

  constructor(
    private httpClient: HttpClient
  ) {}

  private handleError(error: any) {
    console.error("API ERROR: ", error)
    return throwError(() => error)
  }

  get<T>(path: string): Observable<T> {
    return this.httpClient
      .get<T>(this.baseUrl + path)
      .pipe(catchError(this.handleError))
  }
}
