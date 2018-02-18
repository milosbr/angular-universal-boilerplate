import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { PlatformService } from '../core/services/platform/platform.service';
import { TranslateFakeLoader } from '../core/services/translate-wrapper/translate-wrapper.stubs';
import { HomeComponent } from './home.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('HomeComponent', () => {
  let translate: TranslateService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        TranslateService,
        PlatformService
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    translate = TestBed.get(TranslateService) as TranslateService;
    translate.addLangs(['en', 'sr-CS']);
    translate.setDefaultLang('en');
    translate.use('en');
  });


  it('should create the home', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Home Page');
  }));
  it('should render title in different language', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Home Page');
    translate.use('sr-CS');
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Pocetna strana');
  }));

});
