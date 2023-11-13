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
            id: 'orderCode',
            name: "{{orderCode_767a620f_0314}}",
            binding: 'orderCode',
            updateOn: 'blur',
            defaultI18nValue: '订单编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant.merchant_MerchantName',
            name: "{{merchant_Merchant_MerchantName_c0169d08_9r7o}}",
            binding: 'merchant.merchant_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "merchant_Merchant_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderTime',
            name: "{{orderTime_308bc30d_axsq}}",
            binding: 'orderTime',
            updateOn: 'blur',
            defaultI18nValue: '下单时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderTime", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'payMethod',
            name: "{{payMethod_29a89f50_3c87}}",
            binding: 'payMethod',
            updateOn: 'change',
            defaultI18nValue: '支付方式',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "payMethod", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderPerson.orderPerson_name',
            name: "{{orderPerson_OrderPerson_name_4481a4c2_lfg9}}",
            binding: 'orderPerson.orderPerson_name',
            updateOn: 'blur',
            defaultI18nValue: '下单人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderPerson_OrderPerson_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone',
            name: "{{telephone_866d4620_1gi0}}",
            binding: 'telephone',
            updateOn: 'blur',
            defaultI18nValue: '联系电话',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'sendState',
            name: "{{sendState_11e5bd1a_wmm0}}",
            binding: 'sendState',
            updateOn: 'change',
            defaultI18nValue: '发货状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "sendState", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark',
            name: "{{remark_743dc1bc_nr9s}}",
            binding: 'remark',
            updateOn: 'blur',
            defaultI18nValue: '备注',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice',
            name: "{{totalPrice_cd60f924_2r7f}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '订单金额',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalDiscounts',
            name: "{{totalDiscounts_dadf3137_toe5}}",
            binding: 'totalDiscounts',
            updateOn: 'blur',
            defaultI18nValue: '折扣优惠',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "totalDiscounts", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'actualPay',
            name: "{{actualPay_6310d9f5_3uu8}}",
            binding: 'actualPay',
            updateOn: 'blur',
            defaultI18nValue: '合计实付',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "actualPay", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '业务订单',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
