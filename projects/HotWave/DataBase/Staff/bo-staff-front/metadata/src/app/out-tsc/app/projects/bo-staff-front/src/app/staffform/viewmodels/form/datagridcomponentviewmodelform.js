import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{name_77b424b2_isk2}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'code',
            name: "{{code_95ef2878_ewnw}}",
            binding: 'code',
            updateOn: 'blur',
            defaultI18nValue: '编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant',
            name: "{{merchant_91fbe3b1_be3q}}",
            binding: 'merchant',
            updateOn: 'blur',
            defaultI18nValue: '商户',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "merchant", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '员工',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
