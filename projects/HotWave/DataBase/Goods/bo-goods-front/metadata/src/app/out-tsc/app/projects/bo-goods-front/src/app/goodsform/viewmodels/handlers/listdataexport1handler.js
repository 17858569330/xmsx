import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { DataImportExportService as DataImportExportService1 } from '@gsp-dip/data-imp-exp';
var listDataExport1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(listDataExport1Handler, _super);
    function listDataExport1Handler(_DataImportExportService1) {
        var _this = _super.call(this) || this;
        _this._DataImportExportService1 = _DataImportExportService1;
        return _this;
    }
    listDataExport1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('ListFormExport', function (context) {
            var args = [
                '{COMMAND~/params/ruleID}',
                '{COMMAND~/params/option}'
            ];
            return _this.invoke(_this._DataImportExportService1, 'ListFormExport', args, context);
        });
    };
    listDataExport1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'listDataExport1'
        }),
        tslib_1.__metadata("design:paramtypes", [DataImportExportService1])
    ], listDataExport1Handler);
    return listDataExport1Handler;
}(CommandHandler));
export { listDataExport1Handler };
