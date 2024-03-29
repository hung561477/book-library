import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'detail/:id',
      component: DetailBookComponent,
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }
