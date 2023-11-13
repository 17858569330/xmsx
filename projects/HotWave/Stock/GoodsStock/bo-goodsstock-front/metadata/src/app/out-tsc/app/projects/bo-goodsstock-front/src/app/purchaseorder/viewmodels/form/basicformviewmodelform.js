import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var BasicFormViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodelForm, _super);
    function BasicFormViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant_Merchant_MerchantName_63a09429_qmzw',
            name: "{{merchant_Merchant_MerchantName_63a09429_qmzw}}",
            binding: 'merchant.merchant_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "merchant_Merchant_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'expectedTime_56dc23aa_uy5z',
            name: "{{expectedTime_56dc23aa_uy5z}}",
            binding: 'expectedTime',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '预计送达时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "expectedTime", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderTime_c4d1b237_c7mc',
            name: "{{orderTime_c4d1b237_c7mc}}",
            binding: 'orderTime',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '下单时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderTime", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderPerson_OrderPerson_name_c00ee193_ix0g',
            name: "{{orderPerson_OrderPerson_name_c00ee193_ix0g}}",
            binding: 'orderPerson.orderPerson_name',
            updateOn: 'blur',
            defaultI18nValue: '下单人',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderPerson_OrderPerson_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice_6ec93dfd_x09n',
            name: "{{totalPrice_6ec93dfd_x09n}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '采购金额',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_d7c25e3d_8pj7',
            name: "{{remark_d7c25e3d_8pj7}}",
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
    ], BasicFormViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o',
            name: "{{merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o}}",
            binding: 'merchant.merchant_ParentMerchantID_MerchantName',
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
    ], BasicFormViewmodelForm.prototype, "merchant_Merchant_ParentMerchantID_MerchantName", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '补货采购单',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
