import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { AccountComponent } from './pages/account/account.component';
import { ModalComponent } from './components/modal/modal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { DataGetterService } from './services/data-getter.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    FooterComponent,
    CardsComponent,
    AccountComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [DataGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
