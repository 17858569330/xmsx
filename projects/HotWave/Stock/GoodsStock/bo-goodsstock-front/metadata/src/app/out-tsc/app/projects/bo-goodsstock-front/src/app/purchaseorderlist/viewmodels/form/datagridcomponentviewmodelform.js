import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'billStatus.billState',
            name: "{{billStatus_BillState_b3d11341_iqfk}}",
            binding: 'billStatus.billState',
            updateOn: 'change',
            defaultI18nValue: '单据状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "billStatus_BillState", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderCode',
            name: "{{orderCode_173a6f07_6v9a}}",
            binding: 'orderCode',
            updateOn: 'blur',
            defaultI18nValue: '采购编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant.merchant_MerchantName',
            name: "{{merchant_Merchant_MerchantName_b31c76b0_ui74}}",
            binding: 'merchant.merchant_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "merchant_Merchant_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchant.merchant_ParentMerchantID_MerchantName',
            name: "{{merchant_Merchant_ParentMerchantID_MerchantName_c296a2af_usp5}}",
            binding: 'merchant.merchant_ParentMerchantID_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '上游商户/经销商',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "merchant_Merchant_ParentMerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'expectedTime',
            name: "{{expectedTime_a5f6d271_bs1j}}",
            binding: 'expectedTime',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '预计送达时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "expectedTime", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderPerson.orderPerson_name',
            name: "{{orderPerson_OrderPerson_name_4e89a276_0b64}}",
            binding: 'orderPerson.orderPerson_name',
            updateOn: 'blur',
            defaultI18nValue: '下单人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderPerson_OrderPerson_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice',
            name: "{{totalPrice_460dc9cc_54te}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '采购金额',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderTime',
            name: "{{orderTime_5fb59eb7_5a6y}}",
            binding: 'orderTime',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '下单时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderTime", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '补货采购单',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
