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
            name: "{{merchantID_MerchantID_MerchantName_449ab777_1loy}}",
            binding: 'merchantID.merchantID_MerchantName',
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
    ], DataGridComponentViewmodelForm.prototype, "merchantID_MerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goodsID.goodsID_GoodsName',
            name: "{{goodsID_GoodsID_GoodsName_4d203697_hjqn}}",
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
            name: "{{goodsID_GoodsID_Specification_b1978607_m5lu}}",
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
            name: "{{goodsID_GoodsID_Price_c6bb9f5c_v1zr}}",
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
            id: 'stockNum',
            name: "{{stockNum_a92c4fee_3qma}}",
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
    tslib_1.__decorate([
        NgFormControl({
            id: 'dailySalesNum',
            name: "{{dailySalesNum_4c701678_jvc7}}",
            binding: 'dailySalesNum',
            updateOn: 'blur',
            defaultI18nValue: '日销量',
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
    ], DataGridComponentViewmodelForm.prototype, "dailySalesNum", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'safetyStockDays',
            name: "{{safetyStockDays_2e8b73c1_jlxv}}",
            binding: 'safetyStockDays',
            updateOn: 'blur',
            defaultI18nValue: '安全库存天数',
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
    ], DataGridComponentViewmodelForm.prototype, "safetyStockDays", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'safetyStockNum',
            name: "{{safetyStockNum_b650091f_j94p}}",
            binding: 'safetyStockNum',
            updateOn: 'blur',
            defaultI18nValue: '安全库存量',
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
    ], DataGridComponentViewmodelForm.prototype, "safetyStockNum", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'inPurchaseNum',
            name: "{{inPurchaseNum_aad3f44b_d4kf}}",
            binding: 'inPurchaseNum',
            updateOn: 'blur',
            defaultI18nValue: '采购在订量',
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
    ], DataGridComponentViewmodelForm.prototype, "inPurchaseNum", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'inSalesNum',
            name: "{{inSalesNum_e3ff082d_onrr}}",
            binding: 'inSalesNum',
            updateOn: 'blur',
            defaultI18nValue: '销售在订量',
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
    ], DataGridComponentViewmodelForm.prototype, "inSalesNum", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'suggestPurchaseNum',
            name: "{{suggestPurchaseNum_5da37cfa_iizm}}",
            binding: 'suggestPurchaseNum',
            updateOn: 'blur',
            defaultI18nValue: '建议采购量',
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
    ], DataGridComponentViewmodelForm.prototype, "suggestPurchaseNum", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'merchantID.merchantID_ParentMerchantID_MerchantName',
            name: "{{merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh}}",
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
