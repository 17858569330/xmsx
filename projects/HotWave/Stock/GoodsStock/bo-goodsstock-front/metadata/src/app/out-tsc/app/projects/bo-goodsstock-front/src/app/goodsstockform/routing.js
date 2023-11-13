import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateResolveService } from './lang/lang-pipe';
import { RootComponent } from './components/root-component/rootcomponent';
var routes = [
    {
        path: '',
        component: RootComponent,
        children: [],
        resolve: {
            'translate': TranslateResolveService
        }
    }
];
var GoodsStockFormRoutingModule = /** @class */ (function () {
    function GoodsStockFormRoutingModule() {
    }
    GoodsStockFormRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], GoodsStockFormRoutingModule);
    return GoodsStockFormRoutingModule;
}());
export { GoodsStockFormRoutingModule };
