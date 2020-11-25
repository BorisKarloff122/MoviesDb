import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';

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
import { DataGetterService } from './services/data-getter.service';

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
    AppRoutingModule,
    // HttpClientModule
  ],
  // providers: [ DataGetterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
