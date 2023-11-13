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
            id: 'merchantName_c80a3305_jl53',
            name: "{{merchantName_c80a3305_jl53}}",
            binding: 'merchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "merchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchantCode_decf103d_sgwn',
            name: "{{merchantCode_decf103d_sgwn}}",
            binding: 'merchantCode',
            updateOn: 'blur',
            defaultI18nValue: '商户编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "merchantCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'companyType_34a5b660_aq4u',
            name: "{{companyType_34a5b660_aq4u}}",
            binding: 'companyType',
            updateOn: 'change',
            defaultI18nValue: '企业类型',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "companyType", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchantType_2e73fcca_2h7w',
            name: "{{merchantType_2e73fcca_2h7w}}",
            binding: 'merchantType',
            updateOn: 'change',
            defaultI18nValue: '商户类型',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "merchantType", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'realName_ef543f0d_9x4a',
            name: "{{realName_ef543f0d_9x4a}}",
            binding: 'realName',
            updateOn: 'blur',
            defaultI18nValue: '真实姓名',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "realName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'fullName_1a36d5d9_rlsi',
            name: "{{fullName_1a36d5d9_rlsi}}",
            binding: 'fullName',
            updateOn: 'blur',
            defaultI18nValue: '企业全称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "fullName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'businessLicense_14ec2d6c_97z6',
            name: "{{businessLicense_14ec2d6c_97z6}}",
            binding: 'businessLicense',
            updateOn: 'blur',
            defaultI18nValue: '营业执照编码',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "businessLicense", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'address_ce9be2ba_di1t',
            name: "{{address_ce9be2ba_di1t}}",
            binding: 'address',
            updateOn: 'blur',
            defaultI18nValue: '商户地址',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "address", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'email_5eeacb83_5dxr',
            name: "{{email_5eeacb83_5dxr}}",
            binding: 'email',
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
    ], DetailFormComponentViewmodelForm.prototype, "email", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone_ab7face1_3ghr',
            name: "{{telephone_ab7face1_3ghr}}",
            binding: 'telephone',
            updateOn: 'blur',
            defaultI18nValue: '联系电话',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_19c6ed5f_de82',
            name: "{{remark_19c6ed5f_de82}}",
            binding: 'remark',
            updateOn: 'blur',
            defaultI18nValue: '备注',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh',
            name: "{{parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh}}",
            binding: 'parentMerchantID.parentMerchantID_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '上游商户/经销商',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "parentMerchantID_ParentMerchantID_MerchantName", void 0);
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '商户',
            enableValidate: true
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };
