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
            id: 'goodsName',
            name: "{{goodsName_f5c45c50_xevr}}",
            binding: 'goodsName',
            updateOn: 'blur',
            defaultI18nValue: '商品名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "goodsName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goodsCode',
            name: "{{goodsCode_68f83985_nuka}}",
            binding: 'goodsCode',
            updateOn: 'blur',
            defaultI18nValue: '商品编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "goodsCode", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '商品',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
