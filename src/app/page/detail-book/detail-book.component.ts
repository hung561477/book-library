import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../share/services/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit, OnDestroy {
  paramId: string;
  dataCompleted = {};
  description = '';

  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    this.paramId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.subscriptions = this.bookService.getBookDetail(this.paramId).subscribe((val) => {
      this.description = val.volumeInfo.description;
      this.dataCompleted = val;
      this.description = this.description.replace(/<p[^>]*>/g, '')
        .replace(/<\/p>/g, '')
        .replace(/<br[^>]*>/g, '')
        .replace(/<\/br>/g, '')
        .replace(/<b[^>]*>/g, '')
        .replace(/<\/b>/g, '')
        .replace(/<wbr[^>]*>/g, '')
        .replace(/<\/wbr>/g, '');
    }, (error) => {
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
