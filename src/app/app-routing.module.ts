import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show.component';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete.component';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', component: ProductsComponent, children:[
    {path: '', component: ProductsListComponent}
  ]},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'suppliers', component: SuppliersComponent, children:
  [
    {path: '', component: SuppliersListComponent},
    {path: 'show/:id', component: SuppliersShowComponent},
    {path: 'edit/:id', component: SuppliersEditComponent},
    {path: 'delete/:id', component: SuppliersDeleteComponent},
    {path: 'new',    component: SuppliersNewComponent },

  ]}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
