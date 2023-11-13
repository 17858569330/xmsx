
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '补货采购单',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'merchant_Merchant_MerchantName_63a09429_qmzw',
        name: "{{merchant_Merchant_MerchantName_63a09429_qmzw}}",
        binding: 'merchant.merchant_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '商户',
    })
    merchant_Merchant_MerchantName: FormControl;

    @NgFormControl({
        id: 'expectedTime_56dc23aa_uy5z',
        name: "{{expectedTime_56dc23aa_uy5z}}",
        binding: 'expectedTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '预计送达时间',
    })
    expectedTime: FormControl;

    @NgFormControl({
        id: 'orderTime_c4d1b237_c7mc',
        name: "{{orderTime_c4d1b237_c7mc}}",
        binding: 'orderTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '下单时间',
    })
    orderTime: FormControl;

    @NgFormControl({
        id: 'orderPerson_OrderPerson_name_c00ee193_ix0g',
        name: "{{orderPerson_OrderPerson_name_c00ee193_ix0g}}",
        binding: 'orderPerson.orderPerson_name',
        updateOn: 'blur',
        defaultI18nValue: '下单人',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    orderPerson_OrderPerson_name: FormControl;

    @NgFormControl({
        id: 'totalPrice_6ec93dfd_x09n',
        name: "{{totalPrice_6ec93dfd_x09n}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '采购金额',
    })
    totalPrice: FormControl;

    @NgFormControl({
        id: 'remark_d7c25e3d_8pj7',
        name: "{{remark_d7c25e3d_8pj7}}",
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

    @NgFormControl({
        id: 'merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o',
        name: "{{merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o}}",
        binding: 'merchant.merchant_ParentMerchantID_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '上游商户/经销商',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    merchant_Merchant_ParentMerchantID_MerchantName: FormControl;

}