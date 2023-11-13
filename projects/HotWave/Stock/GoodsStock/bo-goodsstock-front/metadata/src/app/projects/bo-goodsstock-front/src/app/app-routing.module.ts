import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'GoodsStockForm', loadChildren:'./goodsstockform/goodsstockform#GoodsStockFormModule'},
  { path: 'GoodsStockPurchase', loadChildren:'./goodsstockpurchase/goodsstockpurchase#GoodsStockPurchaseModule'},
  { path: 'PurchaseOrder', loadChildren:'./purchaseorder/purchaseorder#PurchaseOrderModule'},
  { path: 'PurchaseOrderList', loadChildren:'./purchaseorderlist/purchaseorderlist#PurchaseOrderListModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }