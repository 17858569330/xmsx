import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { SaleOrderListFrmControllerService as SaleOrderListFrmControllerService1 } from '../../services/saleorderlist_frm_controller';
var rootviewmodelsendGoods1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelsendGoods1Handler, _super);
    function rootviewmodelsendGoods1Handler(_ListDataService1, _SaleOrderListFrmControllerService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._SaleOrderListFrmControllerService1 = _SaleOrderListFrmControllerService1;
        return _this;
    }
    rootviewmodelsendGoods1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('sendGoods', function (context) {
            var args = [
                '{COMMAND~/params/id}',
                '{COMMAND~/params/sendstate}'
            ];
            return _this.invoke(_this._SaleOrderListFrmControllerService1, 'sendGoods', args, context);
        });
        this.addTask('refresh', function (context) {
            var args = [
                '{COMMAND~/params/loadCmdName}',
                '{COMMAND~/params/loadCmdFrameId}'
            ];
            return _this.invoke(_this._ListDataService1, 'refresh', args, context);
        });
        this.addLink('sendGoods', 'refresh', "1==1");
    };
    rootviewmodelsendGoods1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelsendGoods1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            SaleOrderListFrmControllerService1])
    ], rootviewmodelsendGoods1Handler);
    return rootviewmodelsendGoods1Handler;
}(CommandHandler));
export { rootviewmodelsendGoods1Handler };
