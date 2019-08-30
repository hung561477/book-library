import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../../share/services/book.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeActivatedRoute } from '../../../../assets/mock-data/mock';
import { RouterTestingModule } from '@angular/router/testing';
import { CommunicateService } from '../../../share/services/communicate.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        BookService,
        CommunicateService,
        HttpClient,
        HttpHandler,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
