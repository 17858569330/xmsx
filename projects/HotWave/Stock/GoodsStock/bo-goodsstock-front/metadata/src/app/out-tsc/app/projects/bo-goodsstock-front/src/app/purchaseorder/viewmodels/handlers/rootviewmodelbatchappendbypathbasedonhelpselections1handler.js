import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { BatchEditService as BatchEditService1 } from '@farris/command-services';
var rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler, _super);
    function rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler(_BatchEditService1) {
        var _this = _super.call(this) || this;
        _this._BatchEditService1 = _BatchEditService1;
        return _this;
    }
    rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('batchAppendByPathBasedOnHelpSelections', function (context) {
            var args = [
                '{COMMAND~/params/frameId}',
                '{COMMAND~/params/mapFields}'
            ];
            return _this.invoke(_this._BatchEditService1, 'batchAppendByPathBasedOnHelpSelections', args, context);
        });
    };
    rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelbatchAppendByPathBasedOnHelpSelections1'
        }),
        tslib_1.__metadata("design:paramtypes", [BatchEditService1])
    ], rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler);
    return rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler;
}(CommandHandler));
export { rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler };
