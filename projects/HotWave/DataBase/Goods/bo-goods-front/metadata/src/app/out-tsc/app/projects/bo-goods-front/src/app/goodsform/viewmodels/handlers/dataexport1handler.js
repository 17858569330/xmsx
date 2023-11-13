import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { DataImportExportService as DataImportExportService1 } from '@gsp-dip/data-imp-exp';
var dataExport1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(dataExport1Handler, _super);
    function dataExport1Handler(_DataImportExportService1) {
        var _this = _super.call(this) || this;
        _this._DataImportExportService1 = _DataImportExportService1;
        return _this;
    }
    dataExport1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('CommonDataExport', function (context) {
            var args = [
                '{COMMAND~/params/type}',
                '{COMMAND~/params/ruleID}',
                '{COMMAND~/params/option}'
            ];
            return _this.invoke(_this._DataImportExportService1, 'CommonDataExport', args, context);
        });
    };
    dataExport1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'dataExport1'
        }),
        tslib_1.__metadata("design:paramtypes", [DataImportExportService1])
    ], dataExport1Handler);
    return dataExport1Handler;
}(CommandHandler));
export { dataExport1Handler };
