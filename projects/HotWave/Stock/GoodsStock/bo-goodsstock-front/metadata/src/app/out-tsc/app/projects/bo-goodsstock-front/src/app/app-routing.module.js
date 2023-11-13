import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'GoodsStockForm', loadChildren: './goodsstockform/goodsstockform#GoodsStockFormModule' },
    { path: 'GoodsStockPurchase', loadChildren: './goodsstockpurchase/goodsstockpurchase#GoodsStockPurchaseModule' },
    { path: 'PurchaseOrder', loadChildren: './purchaseorder/purchaseorder#PurchaseOrderModule' },
    { path: 'PurchaseOrderList', loadChildren: './purchaseorderlist/purchaseorderlist#PurchaseOrderListModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
