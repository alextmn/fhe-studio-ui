import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeEditorModule } from '@ngstack/code-editor';
import { FheEditorComponent } from './components/fhe-editor/fhe-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpOAuth2Interceptor, httpOAuth2Provider } from 'src/services/http-oauth2-interceptor';
import { LoginComponent } from './components/login/login.component';
import { Oauth2CallbackComponent } from './components/oauth2-callback/oauth2-callback.component';
import { FheCircuitsZooComponent } from './components/fhe-circuits-zoo/fhe-circuits-zoo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FheEditorComponent,
    LoginComponent,
    Oauth2CallbackComponent,
    FheCircuitsZooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    CodeEditorModule.forRoot(),
    HttpClientModule,
  ],
  providers: [httpOAuth2Provider],
  bootstrap: [AppComponent]
})
export class AppModule { }