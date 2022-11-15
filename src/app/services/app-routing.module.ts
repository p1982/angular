import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutPagesComponent } from '../pages/about-pages/about-pages.component';
import { ProductPagesComponent } from '../pages/product-pages/product-pages.component';
const routes: Routes=[
  {path: '', component: ProductPagesComponent},
  {path: 'about', component: AboutPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
