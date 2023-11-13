
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '商品库',
    enableValidate: true
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'merchantID.merchantID_MerchantName',
        name: "{{merchantID_MerchantID_MerchantName_79ed0464_zoer}}",
        binding: 'merchantID.merchantID_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '商户名称',
    })
    merchantID_MerchantID_MerchantName: FormControl;

    @NgFormControl({
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
    })
    goodsID_GoodsID_GoodsName: FormControl;

    @NgFormControl({
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
    })
    goodsID_GoodsID_Specification: FormControl;

    @NgFormControl({
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
    })
    goodsID_GoodsID_Price: FormControl;

    @NgFormControl({
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
    })
    merchantID_MerchantID_ParentMerchantID_MerchantName: FormControl;

    @NgFormControl({
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
    })
    stockNum: FormControl;

}