
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '商品',
    enableValidate: true
})

@Injectable()
export class DetailFormComponentViewmodelForm extends Form {
    @NgFormControl({
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
    })
    goodsName: FormControl;

    @NgFormControl({
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
    })
    goodsCode: FormControl;

    @NgFormControl({
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
    })
    specification: FormControl;

    @NgFormControl({
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
    })
    category: FormControl;

    @NgFormControl({
        id: 'price_d0345408_4pk3',
        name: "{{price_d0345408_4pk3}}",
        binding: 'price',
        updateOn: 'blur',
        defaultI18nValue: '单价',
    })
    price: FormControl;

    @NgFormControl({
        id: 'number_cff57161_7eok',
        name: "{{number_cff57161_7eok}}",
        binding: 'number',
        updateOn: 'blur',
        defaultI18nValue: '上架数量',
    })
    number: FormControl;

    @NgFormControl({
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
    })
    remark: FormControl;

}