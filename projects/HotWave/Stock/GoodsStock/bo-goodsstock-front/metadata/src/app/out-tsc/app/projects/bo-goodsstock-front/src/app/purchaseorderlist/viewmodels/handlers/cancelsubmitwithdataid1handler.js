import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { WfTaskHandlerService as WfTaskHandlerService1 } from '@gsp-wf/wf-task-handler';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var cancelSubmitWithDataId1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(cancelSubmitWithDataId1Handler, _super);
    function cancelSubmitWithDataId1Handler(_WfTaskHandlerService1, _CardDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._WfTaskHandlerService1 = _WfTaskHandlerService1;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    cancelSubmitWithDataId1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('cancelSubmitWithDataId', function (context) {
            var args = [
                '{COMMAND~/params/dataId}',
                '{COMMAND~/params/bizDefKey}'
            ];
            return _this.invoke(_this._WfTaskHandlerService1, 'cancelSubmitWithDataId', args, context);
        });
        this.addTask('update', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'update', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/action}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('cancelSubmitWithDataId', 'update', "1==1");
        this.addLink('update', 'transit', "1==1");
    };
    cancelSubmitWithDataId1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'cancelSubmitWithDataId1'
        }),
        tslib_1.__metadata("design:paramtypes", [WfTaskHandlerService1,
            CardDataService1,
            StateMachineService1])
    ], cancelSubmitWithDataId1Handler);
    return cancelSubmitWithDataId1Handler;
}(CommandHandler));
export { cancelSubmitWithDataId1Handler };
