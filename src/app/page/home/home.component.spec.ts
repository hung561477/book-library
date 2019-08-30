import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ItemBookComponent } from '../../share/components/item-book/item-book.component';
import { BookService } from '../../share/services/book.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { fakeActivatedRoute } from '../../../assets/mock-data/mock';
import { SearchComponent } from '../components/search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommunicateService } from '../../share/services/communicate.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, ItemBookComponent, SearchComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
