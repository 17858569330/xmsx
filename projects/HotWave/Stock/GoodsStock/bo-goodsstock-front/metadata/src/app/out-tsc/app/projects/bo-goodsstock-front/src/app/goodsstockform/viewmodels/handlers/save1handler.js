import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { ValidationService as ValidationService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CommandService as CommandService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var Save1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Save1Handler, _super);
    function Save1Handler(_EndEditService1, _ValidationService1, _ListDataService1, _CommandService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._EndEditService1 = _EndEditService1;
        _this._ValidationService1 = _ValidationService1;
        _this._ListDataService1 = _ListDataService1;
        _this._CommandService1 = _CommandService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    Save1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('endEdit', function (context) {
            var args = [];
            return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
        });
        this.addTask('validateAll', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'validateAll', args, context);
        });
        this.addTask('save', function (context) {
            var args = [
                '{COMMAND~/params/successMsg}'
            ];
            return _this.invoke(_this._ListDataService1, 'save', args, context);
        });
        this.addTask('execute', function (context) {
            var args = [
                '{COMMAND~/params/commandName}',
                '{COMMAND~/params/frameId}'
            ];
            return _this.invoke(_this._CommandService1, 'execute', args, context);
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
        this.addLink('endEdit', 'validateAll', "1==1");
        this.addLink('validateAll', 'save', "1==1");
        this.addLink('save', 'execute', "1==1");
        this.addLink('execute', 'transit', "1==1");
        this.addLink('transit', 'resetValidation', "1==1");
    };
    Save1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Save1'
        }),
        tslib_1.__metadata("design:paramtypes", [EndEditService1,
            ValidationService1,
            ListDataService1,
            CommandService1,
            StateMachineService1])
    ], Save1Handler);
    return Save1Handler;
}(CommandHandler));
export { Save1Handler };
