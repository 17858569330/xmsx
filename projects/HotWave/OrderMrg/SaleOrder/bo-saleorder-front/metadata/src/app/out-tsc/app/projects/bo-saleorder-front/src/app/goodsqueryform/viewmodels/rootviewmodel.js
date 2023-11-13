import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        return _this;
    }
    RootViewmodel.prototype.Close1 = function (commandParam) { return; };
    RootViewmodel.prototype.Load1 = function (commandParam) { return; };
    RootViewmodel.prototype.filterQDP1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Close1',
            params: {
                url: '',
                params: ''
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Close1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'filterQDP1',
            params: {
                queryId: '680c07a4-9a46-41a9-aa94-092aeca38c6c',
                filterCondition: ''
            },
            paramDescriptions: {
                queryId: { type: 'string' },
                filterCondition: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "filterQDP1", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
