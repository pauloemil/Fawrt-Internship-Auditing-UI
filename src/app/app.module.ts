import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ActionsSearchComponent } from './actions-search/actions-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActionCardCircularHeaderComponent } from './action-card-circular-header/action-card-circular-header.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    ActionsSearchComponent,
    SearchResultsComponent,
    ActionCardComponent,
    ActionCardCircularHeaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
