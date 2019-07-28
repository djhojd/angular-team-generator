import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent, LoginComponent, UserProfileComponent } from './components';

const firebaseConfig = {
  apiKey: 'AIzaSyDKLZSDkJkFw_hsrx-mSWti7In_EGjMf9o',
  authDomain: 'visma-football.firebaseapp.com',
  databaseURL: 'https://visma-football.firebaseio.com',
  projectId: 'visma-football',
  storageBucket: '',
  messagingSenderId: '947072668027',
  appId: '1:947072668027:web:9e86e0188fc0245f',
};

@NgModule({
  declarations: [AppComponent, DashboardComponent, LoginComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
