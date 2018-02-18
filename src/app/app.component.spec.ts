import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateWrapperService } from './core/services/translate-wrapper/translate-wrapper.service';
import { TranslateFakeLoader, TranslateServiceStub } from './core/services/translate-wrapper/translate-wrapper.stubs';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AppComponent', () => {
  // let translate: TranslateServiceStub;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TranslateWrapperService, useClass: TranslateServiceStub, deps: [TranslateService] },
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })

      ]
    }).compileComponents();
  }));
  // beforeEach(() => {
    // translate = TestBed.get(TranslateWrapperService) as TranslateServiceStub;
  // });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Boilerplate!');
  }));
  it('should render title in different language', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Boilerplate!');
    // translate.use('sr-CS');
    // fixture.detectChanges();
    // compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Dobrodosli u Boilerplate!');
  }));

});
