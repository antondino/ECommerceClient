import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
data: {breadcrumb: 'Shop'}},
{path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
data: {breadcrumb: 'Basket'}},
  {path: 'account', loadChildren: () => import('./account/account.module')
  .then(mod => mod.AccountModule),
  data: {breadcrumb: {skip: true}}},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
