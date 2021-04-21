import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './components/_root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GithubModule } from '../github/github.module'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    AppRoutingModule,
    GithubModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
