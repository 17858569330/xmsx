import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { GridMiddlewareService as GridMiddlewareService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CommandService as CommandService1 } from '@farris/command-services';
var ChangePage1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(ChangePage1Handler, _super);
    function ChangePage1Handler(_GridMiddlewareService1, _ListDataService1, _CommandService1) {
        var _this = _super.call(this) || this;
        _this._GridMiddlewareService1 = _GridMiddlewareService1;
        _this._ListDataService1 = _ListDataService1;
        _this._CommandService1 = _CommandService1;
        return _this;
    }
    ChangePage1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('onPageChanging', function (context) {
            var args = [];
            return _this.invoke(_this._GridMiddlewareService1, 'onPageChanging', args, context);
        });
        this.addTask('revert', function (context) {
            var args = [];
            return _this.invoke(_this._ListDataService1, 'revert', args, context);
        });
        this.addTask('execute', function (context) {
            var args = [
                '{COMMAND~/params/loadCommandName}',
                '{COMMAND~/params/loadCommandFrameId}'
            ];
            return _this.invoke(_this._CommandService1, 'execute', args, context);
        });
        this.addLink('onPageChanging', 'revert', "1==1");
        this.addLink('revert', 'execute', "1==1");
    };
    ChangePage1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'ChangePage1'
        }),
        tslib_1.__metadata("design:paramtypes", [GridMiddlewareService1,
            ListDataService1,
            CommandService1])
    ], ChangePage1Handler);
    return ChangePage1Handler;
}(CommandHandler));
export { ChangePage1Handler };
