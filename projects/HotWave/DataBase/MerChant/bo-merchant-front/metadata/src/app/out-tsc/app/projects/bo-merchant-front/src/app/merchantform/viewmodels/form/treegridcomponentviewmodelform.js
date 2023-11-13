import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var TreeGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(TreeGridComponentViewmodelForm, _super);
    function TreeGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchantName',
            name: "{{merchantName_c80a3305_atir}}",
            binding: 'merchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], TreeGridComponentViewmodelForm.prototype, "merchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchantCode',
            name: "{{merchantCode_decf103d_nbo2}}",
            binding: 'merchantCode',
            updateOn: 'blur',
            defaultI18nValue: '商户编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], TreeGridComponentViewmodelForm.prototype, "merchantCode", void 0);
    TreeGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '商户',
            enableValidate: false
        }),
        Injectable()
    ], TreeGridComponentViewmodelForm);
    return TreeGridComponentViewmodelForm;
}(Form));
export { TreeGridComponentViewmodelForm };
