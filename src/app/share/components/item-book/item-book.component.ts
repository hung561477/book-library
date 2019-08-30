import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'book-item',
  styleUrls: ['./item-book.component.scss'],
  templateUrl: './item-book.component.html',
})
export class ItemBookComponent implements OnChanges {
  @Input() valueInput: any;
  dataCompleted: any;
  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    const temp = changes.valueInput.currentValue;
    this.dataCompleted = temp;
  }

  goBookDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
