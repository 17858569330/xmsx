import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var Edit1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Edit1Handler, _super);
    function Edit1Handler(_StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    Edit1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
    };
    Edit1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Edit1'
        }),
        tslib_1.__metadata("design:paramtypes", [StateMachineService1])
    ], Edit1Handler);
    return Edit1Handler;
}(CommandHandler));
export { Edit1Handler };
