import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodelForm, _super);
    function DetailFormComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_77b424b2_jp3d',
            name: "{{name_77b424b2_jp3d}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'code_95ef2878_w1gd',
            name: "{{code_95ef2878_w1gd}}",
            binding: 'code',
            updateOn: 'blur',
            defaultI18nValue: '编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant_91fbe3b1_6p9z',
            name: "{{merchant_91fbe3b1_6p9z}}",
            binding: 'merchant',
            updateOn: 'blur',
            defaultI18nValue: '商户',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "merchant", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone_TelephoneNumber_fdb78443_na4c',
            name: "{{telephone_TelephoneNumber_fdb78443_na4c}}",
            binding: 'telephone.telephoneNumber',
            updateOn: 'blur',
            defaultI18nValue: '电话号码',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "telephone_TelephoneNumber", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'mailbox_Email_58c17137_hc82',
            name: "{{mailbox_Email_58c17137_hc82}}",
            binding: 'mailbox.email',
            updateOn: 'blur',
            defaultI18nValue: '邮箱',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "mailbox_Email", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'idNumber_02e51691_6ivb',
            name: "{{idNumber_02e51691_6ivb}}",
            binding: 'idNumber',
            updateOn: 'blur',
            defaultI18nValue: '身份证号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "idNumber", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orCorPor_1917e65b_04lg',
            name: "{{orCorPor_1917e65b_04lg}}",
            binding: 'orCorPor',
            updateOn: 'change',
            defaultI18nValue: '是否法人/负责人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "orCorPor", void 0);
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '员工',
            enableValidate: true
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };
