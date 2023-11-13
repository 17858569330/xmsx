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
            id: 'merchantID.merchantID_MerchantName',
            name: "{{merchantID_MerchantID_MerchantName_79ed0464_zoer}}",
            binding: 'merchantID.merchantID_MerchantName',
            updateOn: 'blur',
            defaultI18nValue: '商户名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "merchantID_MerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goodsID.goodsID_GoodsName',
            name: "{{goodsID_GoodsID_GoodsName_ade04dc1_1mgy}}",
            binding: 'goodsID.goodsID_GoodsName',
            updateOn: 'blur',
            defaultI18nValue: '商品名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "goodsID_GoodsID_GoodsName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goodsID.goodsID_Specification',
            name: "{{goodsID_GoodsID_Specification_d208e853_2hno}}",
            binding: 'goodsID.goodsID_Specification',
            updateOn: 'blur',
            defaultI18nValue: '规格型号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "goodsID_GoodsID_Specification", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goodsID.goodsID_Price',
            name: "{{goodsID_GoodsID_Price_bc6384c0_fjgd}}",
            binding: 'goodsID.goodsID_Price',
            updateOn: 'blur',
            defaultI18nValue: '单价',
            validRules: [
                {
                    type: 'maxValue',
                    constraints: [1.7976931348623157e+308],
                },
                {
                    type: 'minValue',
                    constraints: [-1.7976931348623157e+308],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "goodsID_GoodsID_Price", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchantID.merchantID_ParentMerchantID_MerchantName',
            name: "{{merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik}}",
            binding: 'merchantID.merchantID_ParentMerchantID_MerchantName',
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
    ], DataGridComponentViewmodelForm.prototype, "merchantID_MerchantID_ParentMerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'stockNum',
            name: "{{stockNum_f152e4b2_fhhp}}",
            binding: 'stockNum',
            updateOn: 'blur',
            defaultI18nValue: '当前库存量',
            validRules: [
                {
                    type: 'maxValue',
                    constraints: [1.7976931348623157e+308],
                },
                {
                    type: 'minValue',
                    constraints: [-1.7976931348623157e+308],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "stockNum", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '商品库',
            enableValidate: true
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
