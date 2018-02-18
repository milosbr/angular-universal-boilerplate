import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule
  ],
  providers: [],
  declarations: [],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
