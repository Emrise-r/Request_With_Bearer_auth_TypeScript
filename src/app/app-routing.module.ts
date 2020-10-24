import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListProductComponent} from './list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
