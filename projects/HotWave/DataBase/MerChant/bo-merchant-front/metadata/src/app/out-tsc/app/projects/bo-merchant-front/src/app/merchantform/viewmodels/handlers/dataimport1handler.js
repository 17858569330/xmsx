import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { DataImportExportService as DataImportExportService1 } from '@gsp-dip/data-imp-exp';
var dataImport1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(dataImport1Handler, _super);
    function dataImport1Handler(_DataImportExportService1) {
        var _this = _super.call(this) || this;
        _this._DataImportExportService1 = _DataImportExportService1;
        return _this;
    }
    dataImport1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('CommonDataImport', function (context) {
            var args = [
                '{COMMAND~/params/type}',
                '{COMMAND~/params/ruleID}',
                '{COMMAND~/params/option}'
            ];
            return _this.invoke(_this._DataImportExportService1, 'CommonDataImport', args, context);
        });
    };
    dataImport1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'dataImport1'
        }),
        tslib_1.__metadata("design:paramtypes", [DataImportExportService1])
    ], dataImport1Handler);
    return dataImport1Handler;
}(CommandHandler));
export { dataImport1Handler };
