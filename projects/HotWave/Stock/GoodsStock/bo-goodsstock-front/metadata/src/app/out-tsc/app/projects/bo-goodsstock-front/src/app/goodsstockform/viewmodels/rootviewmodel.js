import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        _this.childViewModels = {
            'DataGridComponentViewmodel': 'dataGridComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel.prototype.Load1 = function (commandParam) { return; };
    RootViewmodel.prototype.Add1 = function (commandParam) { return; };
    RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
    RootViewmodel.prototype.Save1 = function (commandParam) { return; };
    RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
    RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelbatchAppend1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelopenHiddenHelp1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelbatchAppend2 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelSave1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelbatchAppend3 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelbatchAppend4 = function (commandParam) { return; };
    RootViewmodel.prototype.rootviewmodelbatchAppend5 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {
                filter: '',
                sort: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Add1',
            params: {
                transitionAction: 'Create'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {
                transitionAction: 'Edit'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Save1',
            params: {
                transitionAction: 'Save',
                commandName: 'Save1',
                frameId: 'data-grid-component',
                successMsg: ''
            },
            paramDescriptions: {
                transitionAction: { type: 'string' },
                commandName: { type: 'string' },
                frameId: { type: 'string' },
                successMsg: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Save1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Cancel1',
            params: {
                transitionAction: 'Cancel',
                loadCmdName: '',
                loadCmdFrameId: ''
            },
            paramDescriptions: {
                transitionAction: { type: 'string' },
                loadCmdName: { type: 'string' },
                loadCmdFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Cancel1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Remove1',
            params: {
                id: '{DATA~/data-grid-component/id}',
                ifSave: '{STATEMACHINE~/renderStates/canEdit}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ0,
                ifSave: { type: 'boolean' },
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Remove1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelbatchAppend1',
            params: {
                frameId: '#{data-grid-component}',
                mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                transitAction: 'Edit'
            },
            paramDescriptions: {
                frameId: { type: 'string' },
                mapFields: { type: 'string' },
                transitAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelbatchAppend1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelopenHiddenHelp1',
            params: {
                helpId: 'helpId'
            },
            paramDescriptions: {
                helpId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelopenHiddenHelp1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelbatchAppend2',
            params: {
                frameId: '#{data-grid-component}',
                mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                transitAction: 'Create'
            },
            paramDescriptions: {
                frameId: { type: 'string' },
                mapFields: { type: 'string' },
                transitAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelbatchAppend2", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelSave1',
            params: {
                transitionAction: 'Save',
                commandName: '',
                frameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                transitionAction: { type: 'string' },
                commandName: { type: 'string' },
                frameId: { type: 'string' },
                successMsg: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelSave1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelbatchAppend3',
            params: {
                frameId: '#{data-grid-component}',
                mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                transitAction: 'Create'
            },
            paramDescriptions: {
                frameId: { type: 'string' },
                mapFields: { type: 'string' },
                transitAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelbatchAppend3", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelbatchAppend4',
            params: {
                frameId: '#{data-grid-component}',
                mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                transitAction: 'Create'
            },
            paramDescriptions: {
                frameId: { type: 'string' },
                mapFields: { type: 'string' },
                transitAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelbatchAppend4", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootviewmodelbatchAppend5',
            params: {
                frameId: '#{data-grid-component}',
                mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                transitAction: 'Create'
            },
            paramDescriptions: {
                frameId: { type: 'string' },
                mapFields: { type: 'string' },
                transitAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootviewmodelbatchAppend5", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0 };
