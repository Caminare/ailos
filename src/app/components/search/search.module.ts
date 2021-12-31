import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxMaskModule } from "ngx-mask";
import { CpfService } from "src/app/services/cpf.service";
import { CooperatedDataComponent } from "./cooperated-data/cooperated-data.component";
import { ErrorComponent } from "./error/error.component";
import { SearchComponent } from "./search.component";

@NgModule({
  declarations: [
    SearchComponent,
    ErrorComponent,
    CooperatedDataComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    CpfService,
  ],
  exports: [
    SearchComponent
  ]
})

export class SearchModule { 
}
