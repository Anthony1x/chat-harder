import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError, map, Observable, tap, throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatterUrl = 'api/chat1.json'
  private chatterOverviewUrl = 'api/chatters.json'


  constructor(private http: HttpClient) {
  }

  getChatMessages(id: number): Observable<{ id: number, messages: IChatMessage[] }> {
    console.log(id)
    return this.http.get<{ id: number, messages: IChatMessage[] }>(`api/chat${(id)}.json`)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  getChatters(): Observable<IChat[]> {
    return this.http.get<IChat[]>(this.chatterOverviewUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  // getProduct(id: number): Observable<IChat | undefined> {
  //   return this.getProducts()
  //     .pipe(
  //       map((products: IChat[]) => products.find(p => p.ch === id))
  //     );
  // }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)

    return throwError(errorMessage)
  }

}

export interface IChat {
  id: number;
  image: string;
  chatterName: string;
  lastMessage: string;
  date: string;
}

export interface IChatMessage {
  isMaster: boolean;
  chatMessage: string;
  timeStamp: string;
}
