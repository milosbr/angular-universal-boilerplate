import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { routes, AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateUniversalLoader } from './core/translate-universal-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(platformId: any, http: HttpClient) {
  if (platformId === 'server') {
    return new TranslateUniversalLoader();
  }
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'boilerplate' }),
    RouterModule.forRoot(routes),
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [PLATFORM_ID, HttpClient]
      }
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
