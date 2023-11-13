import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { BatchEditService as BatchEditService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var rootviewmodelbatchAppend3Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelbatchAppend3Handler, _super);
    function rootviewmodelbatchAppend3Handler(_BatchEditService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._BatchEditService1 = _BatchEditService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    rootviewmodelbatchAppend3Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('batchAppend', function (context) {
            var args = [
                '{COMMAND~/params/frameId}',
                '{COMMAND~/params/mapFields}'
            ];
            return _this.invoke(_this._BatchEditService1, 'batchAppend', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('batchAppend', 'transit', "1==1");
    };
    rootviewmodelbatchAppend3Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelbatchAppend3'
        }),
        tslib_1.__metadata("design:paramtypes", [BatchEditService1,
            StateMachineService1])
    ], rootviewmodelbatchAppend3Handler);
    return rootviewmodelbatchAppend3Handler;
}(CommandHandler));
export { rootviewmodelbatchAppend3Handler };
