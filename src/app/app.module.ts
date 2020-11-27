import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { AccountComponent } from './pages/account/account.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    AccountHeaderComponent,
    FooterComponent,
    CardsComponent,
    AccountComponent,
    ModalComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
