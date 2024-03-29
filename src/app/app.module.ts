import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { ApiProvider } from './providers/api';

// PAGES
import { HomePage } from './pages/home/home';
import { LaunchPage } from './pages/launch/launch';
import { MediaPage } from './pages/media/media';

// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar';
import { LaunchCardComponent } from './components/launch-card/launch-card';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		LaunchPage,
		NavbarComponent,
		LaunchCardComponent,
		MediaPage
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		LaunchPage,
		MediaPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ApiProvider
	]
})
export class AppModule { }
