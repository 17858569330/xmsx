import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var OrderdetailComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(OrderdetailComponentViewmodelForm, _super);
    function OrderdetailComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'goods.goods',
            name: "{{goods_d3829541_0hbn}}",
            binding: 'goods.goods',
            updateOn: 'blur',
            defaultI18nValue: '商品',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], OrderdetailComponentViewmodelForm.prototype, "goods", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'specification',
            name: "{{specification_63d2f314_8ks8}}",
            binding: 'specification',
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
    ], OrderdetailComponentViewmodelForm.prototype, "specification", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'quality',
            name: "{{quality_381e93a8_lzmz}}",
            binding: 'quality',
            updateOn: 'blur',
            defaultI18nValue: '数量',
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
    ], OrderdetailComponentViewmodelForm.prototype, "quality", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'price',
            name: "{{price_12e9f1a9_0oqq}}",
            binding: 'price',
            updateOn: 'blur',
            defaultI18nValue: '标准单价',
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
    ], OrderdetailComponentViewmodelForm.prototype, "price", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'amount',
            name: "{{amount_62e1cb4c_sk4g}}",
            binding: 'amount',
            updateOn: 'blur',
            defaultI18nValue: '金额',
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
    ], OrderdetailComponentViewmodelForm.prototype, "amount", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'discountType',
            name: "{{discountType_8004a7da_qc99}}",
            binding: 'discountType',
            updateOn: 'change',
            defaultI18nValue: '折扣类型',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], OrderdetailComponentViewmodelForm.prototype, "discountType", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'discount',
            name: "{{discount_0658848e_zq1k}}",
            binding: 'discount',
            updateOn: 'blur',
            defaultI18nValue: '折扣金额',
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
    ], OrderdetailComponentViewmodelForm.prototype, "discount", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'actualAmount',
            name: "{{actualAmount_7136b6c1_m0aj}}",
            binding: 'actualAmount',
            updateOn: 'blur',
            defaultI18nValue: '实际结算金额',
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
    ], OrderdetailComponentViewmodelForm.prototype, "actualAmount", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark',
            name: "{{remark_f9d55622_0rpu}}",
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
    ], OrderdetailComponentViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goods.goods_GoodsName',
            name: "{{goods_Goods_GoodsName_b110ddde_h94h}}",
            binding: 'goods.goods_GoodsName',
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
    ], OrderdetailComponentViewmodelForm.prototype, "goods_Goods_GoodsName", void 0);
    OrderdetailComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '订单明细',
            enableValidate: true
        }),
        Injectable()
    ], OrderdetailComponentViewmodelForm);
    return OrderdetailComponentViewmodelForm;
}(Form));
export { OrderdetailComponentViewmodelForm };
