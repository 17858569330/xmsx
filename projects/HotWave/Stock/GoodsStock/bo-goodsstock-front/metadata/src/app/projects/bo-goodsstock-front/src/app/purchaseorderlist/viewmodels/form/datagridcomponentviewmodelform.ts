
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '补货采购单',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'billStatus.billState',
        name: "{{billStatus_BillState_b3d11341_iqfk}}",
        binding: 'billStatus.billState',
        updateOn: 'change',
        defaultI18nValue: '单据状态',
    })
    billStatus_BillState: FormControl;

    @NgFormControl({
        id: 'orderCode',
        name: "{{orderCode_173a6f07_6v9a}}",
        binding: 'orderCode',
        updateOn: 'blur',
        defaultI18nValue: '采购编号',
    })
    orderCode: FormControl;

    @NgFormControl({
        id: 'merchant.merchant_MerchantName',
        name: "{{merchant_Merchant_MerchantName_b31c76b0_ui74}}",
        binding: 'merchant.merchant_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '商户名称',
    })
    merchant_Merchant_MerchantName: FormControl;

    @NgFormControl({
        id: 'merchant.merchant_ParentMerchantID_MerchantName',
        name: "{{merchant_Merchant_ParentMerchantID_MerchantName_c296a2af_usp5}}",
        binding: 'merchant.merchant_ParentMerchantID_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '上游商户/经销商',
    })
    merchant_Merchant_ParentMerchantID_MerchantName: FormControl;

    @NgFormControl({
        id: 'expectedTime',
        name: "{{expectedTime_a5f6d271_bs1j}}",
        binding: 'expectedTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '预计送达时间',
    })
    expectedTime: FormControl;

    @NgFormControl({
        id: 'orderPerson.orderPerson_name',
        name: "{{orderPerson_OrderPerson_name_4e89a276_0b64}}",
        binding: 'orderPerson.orderPerson_name',
        updateOn: 'blur',
        defaultI18nValue: '下单人',
    })
    orderPerson_OrderPerson_name: FormControl;

    @NgFormControl({
        id: 'totalPrice',
        name: "{{totalPrice_460dc9cc_54te}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '采购金额',
    })
    totalPrice: FormControl;

    @NgFormControl({
        id: 'orderTime',
        name: "{{orderTime_5fb59eb7_5a6y}}",
        binding: 'orderTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '下单时间',
    })
    orderTime: FormControl;

}