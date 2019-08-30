import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageRoutingModule } from './page.routing';

import { PageComponent } from './page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../share/share.module';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    ShareModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PageComponent,
    HeaderComponent,
    HomeComponent,
    DetailBookComponent,
    SearchComponent,
    FooterComponent,
  ],
  providers: [],
})
export class PageModule {
}
