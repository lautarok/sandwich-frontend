import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiCall {
  constructor(
    private httpClient: HttpClient
  ) {}

  private handleError(error: any) {
    console.error("API ERROR: ", error)
    return throwError(() => error)
  }

  get<T>(path: string): Observable<T> {
    return this.httpClient
      .get<T>(environment.API_URL + path)
      .pipe(catchError(this.handleError))
  }
}
