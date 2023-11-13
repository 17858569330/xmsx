import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { BatchEditService as BatchEditService1 } from '@farris/command-services';
var rootviewmodelopenHiddenHelp1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelopenHiddenHelp1Handler, _super);
    function rootviewmodelopenHiddenHelp1Handler(_BatchEditService1) {
        var _this = _super.call(this) || this;
        _this._BatchEditService1 = _BatchEditService1;
        return _this;
    }
    rootviewmodelopenHiddenHelp1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('openHiddenHelp', function (context) {
            var args = [
                '{COMMAND~/params/helpId}'
            ];
            return _this.invoke(_this._BatchEditService1, 'openHiddenHelp', args, context);
        });
    };
    rootviewmodelopenHiddenHelp1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelopenHiddenHelp1'
        }),
        tslib_1.__metadata("design:paramtypes", [BatchEditService1])
    ], rootviewmodelopenHiddenHelp1Handler);
    return rootviewmodelopenHiddenHelp1Handler;
}(CommandHandler));
export { rootviewmodelopenHiddenHelp1Handler };
