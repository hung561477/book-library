import { ModuleWithProviders, NgModule } from '@angular/core';
import { ItemBookComponent } from './components/item-book/item-book.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const COMPONENTS = [ ItemBookComponent ];

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [],
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ShareModule,
      providers: [],
    };
  }
}
