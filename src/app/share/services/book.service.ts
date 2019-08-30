import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }

  getAllBook(): Observable<any> {
    return this.http.get(`${environment.API_SERVICE_ENDPOINT}?q=subject:fiction`);
  }

  getBookDetail(id): Observable<any> {
    return this.http.get(`${environment.API_SERVICE_ENDPOINT}/${id}`);
  }

  searchBooks(search): Observable<any> {
    return this.http.get(`${environment.API_SERVICE_ENDPOINT}?q='${search}'&maxResults=8`);
  }
}