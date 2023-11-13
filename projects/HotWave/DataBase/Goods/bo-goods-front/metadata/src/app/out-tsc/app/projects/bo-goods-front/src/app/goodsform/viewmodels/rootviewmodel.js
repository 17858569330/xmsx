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
        _this.childViewModels = {
            'DataGridComponentViewmodel': 'dataGridComponentViewmodel',
            'DetailFormComponentViewmodel': 'detailFormComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel.prototype.dataImport1 = function (commandParam) { return; };
    RootViewmodel.prototype.dataExport1 = function (commandParam) { return; };
    RootViewmodel.prototype.listDataExport1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelDataExport1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'dataImport1',
            params: {
                type: '',
                ruleID: '4de28998-7ff7-4fc6-9404-6ab36130ff28',
                option: '   {"importdbRefresh":true}'
            },
            paramDescriptions: {
                type: { type: 'int' },
                ruleID: { type: 'string' },
                option: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "dataImport1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'dataExport1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "dataExport1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'listDataExport1',
            params: {
                ruleID: '4de28998-7ff7-4fc6-9404-6ab36130ff28',
                option: ' {"selectFilterGridComponent":"data-grid-component"}'
            },
            paramDescriptions: {
                ruleID: { type: 'string' },
                option: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "listDataExport1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelDataExport1',
            params: {
                type: '',
                ruleID: '4de28998-7ff7-4fc6-9404-6ab36130ff28',
                option: '{"selectFilterGridComponent":"data-grid-component"}'
            },
            paramDescriptions: {
                type: { type: 'int' },
                ruleID: { type: 'string' },
                option: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelDataExport1", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
