import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var BasicFormViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodelForm, _super);
    function BasicFormViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderCode_1d7fb675_wqcn',
            name: "{{orderCode_1d7fb675_wqcn}}",
            binding: 'orderCode',
            updateOn: 'blur',
            defaultI18nValue: '订单编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant_Merchant_MerchantName_147deab4_1zy9',
            name: "{{merchant_Merchant_MerchantName_147deab4_1zy9}}",
            binding: 'merchant.merchant_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "merchant_Merchant_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderTime_e0e86794_fc6z',
            name: "{{orderTime_e0e86794_fc6z}}",
            binding: 'orderTime',
            updateOn: 'blur',
            defaultI18nValue: '下单时间',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderTime", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'payMethod_ba5f52c1_xz4x',
            name: "{{payMethod_ba5f52c1_xz4x}}",
            binding: 'payMethod',
            updateOn: 'change',
            defaultI18nValue: '支付方式',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "payMethod", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone_a8621f05_4hyo',
            name: "{{telephone_a8621f05_4hyo}}",
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
    ], BasicFormViewmodelForm.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'sendState_3584b1dc_xv9j',
            name: "{{sendState_3584b1dc_xv9j}}",
            binding: 'sendState',
            updateOn: 'change',
            defaultI18nValue: '发货状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "sendState", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_71281e54_dqeo',
            name: "{{remark_71281e54_dqeo}}",
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
            id: 'totalPrice_559ae1d0_tdrx',
            name: "{{totalPrice_559ae1d0_tdrx}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '订单金额',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalDiscounts_878ff42f_djm9',
            name: "{{totalDiscounts_878ff42f_djm9}}",
            binding: 'totalDiscounts',
            updateOn: 'blur',
            defaultI18nValue: '折扣优惠',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "totalDiscounts", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'actualPay_090e17ef_mvgt',
            name: "{{actualPay_090e17ef_mvgt}}",
            binding: 'actualPay',
            updateOn: 'blur',
            defaultI18nValue: '合计实付',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "actualPay", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderPerson_771cf8b5_32o4',
            name: "{{orderPerson_771cf8b5_32o4}}",
            binding: 'orderPerson.orderPerson',
            updateOn: 'blur',
            defaultI18nValue: '下单人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderPerson", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderPerson_OrderPerson_name_676aa1fa_yg9q',
            name: "{{orderPerson_OrderPerson_name_676aa1fa_yg9q}}",
            binding: 'orderPerson.orderPerson_name',
            updateOn: 'blur',
            defaultI18nValue: '下单人名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderPerson_OrderPerson_name", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '业务订单',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
