import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableWithSearchComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { ColumnResizeDirective } from './column-resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableWithSearchComponent,
    ColumnResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
