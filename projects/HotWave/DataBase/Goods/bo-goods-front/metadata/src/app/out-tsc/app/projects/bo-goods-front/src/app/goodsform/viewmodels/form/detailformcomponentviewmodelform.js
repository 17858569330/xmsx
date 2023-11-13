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
            id: 'goodsName_f5c45c50_1xh8',
            name: "{{goodsName_f5c45c50_1xh8}}",
            binding: 'goodsName',
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
    ], DetailFormComponentViewmodelForm.prototype, "goodsName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'goodsCode_68f83985_ou4c',
            name: "{{goodsCode_68f83985_ou4c}}",
            binding: 'goodsCode',
            updateOn: 'blur',
            defaultI18nValue: '商品编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "goodsCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'specification_d87a107d_kxuw',
            name: "{{specification_d87a107d_kxuw}}",
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
    ], DetailFormComponentViewmodelForm.prototype, "specification", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'category_54897081_hal5',
            name: "{{category_54897081_hal5}}",
            binding: 'category',
            updateOn: 'blur',
            defaultI18nValue: '分类名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "category", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'price_d0345408_4pk3',
            name: "{{price_d0345408_4pk3}}",
            binding: 'price',
            updateOn: 'blur',
            defaultI18nValue: '单价',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "price", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'number_cff57161_7eok',
            name: "{{number_cff57161_7eok}}",
            binding: 'number',
            updateOn: 'blur',
            defaultI18nValue: '上架数量',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "number", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_1477fc42_atby',
            name: "{{remark_1477fc42_atby}}",
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
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '商品',
            enableValidate: true
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };
