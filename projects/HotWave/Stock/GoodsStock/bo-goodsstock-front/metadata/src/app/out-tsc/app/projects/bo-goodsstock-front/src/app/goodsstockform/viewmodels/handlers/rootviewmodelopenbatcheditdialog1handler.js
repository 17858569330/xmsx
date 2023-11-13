import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { BatchEditService as BatchEditService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var rootviewmodelopenBatchEditDialog1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelopenBatchEditDialog1Handler, _super);
    function rootviewmodelopenBatchEditDialog1Handler(_BatchEditService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._BatchEditService1 = _BatchEditService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    rootviewmodelopenBatchEditDialog1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('openBatchEditDialog', function (context) {
            var args = [
                '{COMMAND~/params/frameId}'
            ];
            return _this.invoke(_this._BatchEditService1, 'openBatchEditDialog', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('openBatchEditDialog', 'transit', "1==1");
    };
    rootviewmodelopenBatchEditDialog1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelopenBatchEditDialog1'
        }),
        tslib_1.__metadata("design:paramtypes", [BatchEditService1,
            StateMachineService1])
    ], rootviewmodelopenBatchEditDialog1Handler);
    return rootviewmodelopenBatchEditDialog1Handler;
}(CommandHandler));
export { rootviewmodelopenBatchEditDialog1Handler };
