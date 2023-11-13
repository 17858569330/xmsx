import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { NavigationService as NavigationService1 } from '@farris/command-services';
var Close1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Close1Handler, _super);
    function Close1Handler(_NavigationService1) {
        var _this = _super.call(this) || this;
        _this._NavigationService1 = _NavigationService1;
        return _this;
    }
    Close1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('close', function (context) {
            var args = [];
            return _this.invoke(_this._NavigationService1, 'close', args, context);
        });
    };
    Close1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Close1'
        }),
        tslib_1.__metadata("design:paramtypes", [NavigationService1])
    ], Close1Handler);
    return Close1Handler;
}(CommandHandler));
export { Close1Handler };
