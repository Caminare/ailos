import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/search/error/error.component';
import { CooperatedDataComponent } from './components/search/cooperated-data/cooperated-data.component';
import { NgxMaskModule } from 'ngx-mask';
import { ValidateBrService } from 'angular-validate-br';
import { CommonModule } from '@angular/common';
import { SearchModule } from './components/search/search.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    AppRoutingModule,
    CommonModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ValidateBrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
