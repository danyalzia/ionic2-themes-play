import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ThemingPage } from '../pages/theming/theming';

// Global state (used for theming)
import { AppState } from './app.global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ThemingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ThemingPage
  ],
  providers: [AppState, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
