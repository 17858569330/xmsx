import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'SaleOrderCardDemo1', loadChildren:'./saleordercarddemo1/saleordercarddemo1#SaleOrderCardDemo1Module'},
  { path: 'SaleOrderList', loadChildren:'./saleorderlist/saleorderlist#SaleOrderListModule'},
  { path: 'GoodsQueryForm', loadChildren:'./goodsqueryform/goodsqueryform#GoodsQueryFormModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }