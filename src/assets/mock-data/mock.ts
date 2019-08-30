import { Observable } from 'rxjs';

export const fakeActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => { }
    },
  }
}

export class BookServiceMock {
  public getBookDetail(): Observable<any> {
    return Observable.of([]);
  }
}