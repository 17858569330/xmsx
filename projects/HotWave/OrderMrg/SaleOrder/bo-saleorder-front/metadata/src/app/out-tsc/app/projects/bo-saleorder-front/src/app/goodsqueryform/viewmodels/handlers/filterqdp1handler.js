import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { QueryIndexService as QueryIndexService1 } from '@qdp/command-services';
var filterQDP1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(filterQDP1Handler, _super);
    function filterQDP1Handler(_QueryIndexService1) {
        var _this = _super.call(this) || this;
        _this._QueryIndexService1 = _QueryIndexService1;
        return _this;
    }
    filterQDP1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('filterQDP', function (context) {
            var args = [
                '{COMMAND~/params/queryId}',
                '{COMMAND~/params/filterCondition}'
            ];
            return _this.invoke(_this._QueryIndexService1, 'filterQDP', args, context);
        });
    };
    filterQDP1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'filterQDP1'
        }),
        tslib_1.__metadata("design:paramtypes", [QueryIndexService1])
    ], filterQDP1Handler);
    return filterQDP1Handler;
}(CommandHandler));
export { filterQDP1Handler };
