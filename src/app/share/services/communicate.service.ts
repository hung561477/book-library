import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class CommunicateService {
  
  constructor() { }

  private dataToogle = new Subject<any>();
  loadDataToogle = this.dataToogle.asObservable();

  private dataBookDetail = new Subject<any>();
  loadDataBookDetail = this.dataBookDetail.asObservable();

  private dataSearch = new Subject<any>();
  loadDataSearch = this.dataSearch.asObservable();

  setDataToogle(value: any) {
    this.dataToogle.next(value);
  }

  setDataBookDetail(value: any) {
    this.dataBookDetail.next(value);
  }

  setDataSearch(value: any[]) {
    this.dataSearch.next(value);
  }
}