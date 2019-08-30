import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';
import { BookService } from './share/services/book.service';
import { CommunicateService } from './share/services/communicate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService, CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
