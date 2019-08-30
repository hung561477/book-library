import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBookComponent } from './detail-book.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../../share/services/book.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  fakeActivatedRoute,
} from '../../../assets/mock-data/mock';

describe('DetailBookComponent', () => {
  let component: DetailBookComponent;
  let fixture: ComponentFixture<DetailBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBookComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        BookService,
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
