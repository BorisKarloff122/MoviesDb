import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {AccountComponent} from './pages/account/account.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
