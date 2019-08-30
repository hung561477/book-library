import { Component, OnInit } from '@angular/core';
import { BookService } from '../../share/services/book.service';
import { CommunicateService } from '../../share/services/communicate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataBook: any = [];
  dataStatus: boolean;
  constructor(private bookService: BookService,
    private communicate: CommunicateService) { }

  ngOnInit() {
    this.bookService.getAllBook().subscribe((val) => {
      this.dataBook = val.items;
    }, (error) => {
    });

    this.communicate.loadDataSearch.subscribe((val) => {
      this.dataBook = val;
    })
  }

}
