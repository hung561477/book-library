import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../share/services/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommunicateService } from '../../../share/services/communicate.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  valueSearch: any;

  constructor(
    private bookService: BookService, 
    private formBuilder: FormBuilder,
    private communicate: CommunicateService,
    ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  onSubmit() {
    this.valueSearch = this.searchForm.value.search;
    this.bookService.searchBooks(this.valueSearch).subscribe((val) => {
      this.communicate.setDataSearch(val.items);
    }, (error) => {

    });
  }

}
