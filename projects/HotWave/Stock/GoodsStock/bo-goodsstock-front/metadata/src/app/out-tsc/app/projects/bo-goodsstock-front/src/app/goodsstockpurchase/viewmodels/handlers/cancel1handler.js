import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ValidationService as ValidationService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var Cancel1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Cancel1Handler, _super);
    function Cancel1Handler(_ValidationService1, _ListDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._ValidationService1 = _ValidationService1;
        _this._ListDataService1 = _ListDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    Cancel1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('cancel', function (context) {
            var args = [];
            return _this.invoke(_this._ListDataService1, 'cancel', args, context);
        });
        this.addTask('refresh', function (context) {
            var args = [
                '{COMMAND~/params/loadCmdName}',
                '{COMMAND~/params/loadCmdFrameId}'
            ];
            return _this.invoke(_this._ListDataService1, 'refresh', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addTask('resetValidation', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
        });
        this.addLink('cancel', 'refresh', "1==1");
        this.addLink('refresh', 'transit', "1==1");
        this.addLink('transit', 'resetValidation', "1==1");
    };
    Cancel1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Cancel1'
        }),
        tslib_1.__metadata("design:paramtypes", [ValidationService1,
            ListDataService1,
            StateMachineService1])
    ], Cancel1Handler);
    return Cancel1Handler;
}(CommandHandler));
export { Cancel1Handler };
