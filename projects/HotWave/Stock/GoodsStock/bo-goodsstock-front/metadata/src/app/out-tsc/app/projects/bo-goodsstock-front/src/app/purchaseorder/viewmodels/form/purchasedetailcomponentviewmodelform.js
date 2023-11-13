import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var PurchasedetailComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(PurchasedetailComponentViewmodelForm, _super);
    function PurchasedetailComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'goods.goods_GoodsName',
            name: "{{goods_Goods_GoodsName_053fe342_cike}}",
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
    ], PurchasedetailComponentViewmodelForm.prototype, "goods_Goods_GoodsName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goods.goods_Specification',
            name: "{{goods_Goods_Specification_7a80c1a7_p7jl}}",
            binding: 'goods.goods_Specification',
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
    ], PurchasedetailComponentViewmodelForm.prototype, "goods_Goods_Specification", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'quality',
            name: "{{quality_b81a8d03_d8r9}}",
            binding: 'quality',
            updateOn: 'blur',
            defaultI18nValue: '采购数量',
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
    ], PurchasedetailComponentViewmodelForm.prototype, "quality", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'price',
            name: "{{price_9ca3c686_362q}}",
            binding: 'price',
            updateOn: 'blur',
            defaultI18nValue: '采购单价',
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
    ], PurchasedetailComponentViewmodelForm.prototype, "price", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'amount',
            name: "{{amount_95e56af1_2k0y}}",
            binding: 'amount',
            updateOn: 'blur',
            defaultI18nValue: '采购小计',
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
    ], PurchasedetailComponentViewmodelForm.prototype, "amount", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark',
            name: "{{remark_668d79eb_fyk9}}",
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
    ], PurchasedetailComponentViewmodelForm.prototype, "remark", void 0);
    PurchasedetailComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '补货采购细节',
            enableValidate: true
        }),
        Injectable()
    ], PurchasedetailComponentViewmodelForm);
    return PurchasedetailComponentViewmodelForm;
}(Form));
export { PurchasedetailComponentViewmodelForm };
