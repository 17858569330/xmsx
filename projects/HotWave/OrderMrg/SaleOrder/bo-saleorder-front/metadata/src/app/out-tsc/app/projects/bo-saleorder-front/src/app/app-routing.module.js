import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'SaleOrderCardDemo1', loadChildren: './saleordercarddemo1/saleordercarddemo1#SaleOrderCardDemo1Module' },
    { path: 'SaleOrderList', loadChildren: './saleorderlist/saleorderlist#SaleOrderListModule' },
    { path: 'GoodsQueryForm', loadChildren: './goodsqueryform/goodsqueryform#GoodsQueryFormModule' }
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
