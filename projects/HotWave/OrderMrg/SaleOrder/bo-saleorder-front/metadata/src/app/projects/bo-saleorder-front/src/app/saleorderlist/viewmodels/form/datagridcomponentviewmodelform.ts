
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '业务订单',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'orderCode',
        name: "{{orderCode_767a620f_0314}}",
        binding: 'orderCode',
        updateOn: 'blur',
        defaultI18nValue: '订单编号',
    })
    orderCode: FormControl;

    @NgFormControl({
        id: 'merchant.merchant_MerchantName',
        name: "{{merchant_Merchant_MerchantName_c0169d08_9r7o}}",
        binding: 'merchant.merchant_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '商户名称',
    })
    merchant_Merchant_MerchantName: FormControl;

    @NgFormControl({
        id: 'orderTime',
        name: "{{orderTime_308bc30d_axsq}}",
        binding: 'orderTime',
        updateOn: 'blur',
        defaultI18nValue: '下单时间',
    })
    orderTime: FormControl;

    @NgFormControl({
        id: 'payMethod',
        name: "{{payMethod_29a89f50_3c87}}",
        binding: 'payMethod',
        updateOn: 'change',
        defaultI18nValue: '支付方式',
    })
    payMethod: FormControl;

    @NgFormControl({
        id: 'orderPerson.orderPerson_name',
        name: "{{orderPerson_OrderPerson_name_4481a4c2_lfg9}}",
        binding: 'orderPerson.orderPerson_name',
        updateOn: 'blur',
        defaultI18nValue: '下单人',
    })
    orderPerson_OrderPerson_name: FormControl;

    @NgFormControl({
        id: 'telephone',
        name: "{{telephone_866d4620_1gi0}}",
        binding: 'telephone',
        updateOn: 'blur',
        defaultI18nValue: '联系电话',
    })
    telephone: FormControl;

    @NgFormControl({
        id: 'sendState',
        name: "{{sendState_11e5bd1a_wmm0}}",
        binding: 'sendState',
        updateOn: 'change',
        defaultI18nValue: '发货状态',
    })
    sendState: FormControl;

    @NgFormControl({
        id: 'remark',
        name: "{{remark_743dc1bc_nr9s}}",
        binding: 'remark',
        updateOn: 'blur',
        defaultI18nValue: '备注',
    })
    remark: FormControl;

    @NgFormControl({
        id: 'totalPrice',
        name: "{{totalPrice_cd60f924_2r7f}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '订单金额',
    })
    totalPrice: FormControl;

    @NgFormControl({
        id: 'totalDiscounts',
        name: "{{totalDiscounts_dadf3137_toe5}}",
        binding: 'totalDiscounts',
        updateOn: 'blur',
        defaultI18nValue: '折扣优惠',
    })
    totalDiscounts: FormControl;

    @NgFormControl({
        id: 'actualPay',
        name: "{{actualPay_6310d9f5_3uu8}}",
        binding: 'actualPay',
        updateOn: 'blur',
        defaultI18nValue: '合计实付',
    })
    actualPay: FormControl;

}