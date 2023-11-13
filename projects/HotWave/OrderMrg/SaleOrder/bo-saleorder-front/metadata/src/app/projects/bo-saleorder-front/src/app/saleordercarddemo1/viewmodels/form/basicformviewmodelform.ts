
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '业务订单',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'orderCode_1d7fb675_wqcn',
        name: "{{orderCode_1d7fb675_wqcn}}",
        binding: 'orderCode',
        updateOn: 'blur',
        defaultI18nValue: '订单编号',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    orderCode: FormControl;

    @NgFormControl({
        id: 'merchant_Merchant_MerchantName_147deab4_1zy9',
        name: "{{merchant_Merchant_MerchantName_147deab4_1zy9}}",
        binding: 'merchant.merchant_MerchantName',
        updateOn: 'blur',
        defaultI18nValue: '商户名称',
    })
    merchant_Merchant_MerchantName: FormControl;

    @NgFormControl({
        id: 'orderTime_e0e86794_fc6z',
        name: "{{orderTime_e0e86794_fc6z}}",
        binding: 'orderTime',
        updateOn: 'blur',
        defaultI18nValue: '下单时间',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    orderTime: FormControl;

    @NgFormControl({
        id: 'payMethod_ba5f52c1_xz4x',
        name: "{{payMethod_ba5f52c1_xz4x}}",
        binding: 'payMethod',
        updateOn: 'change',
        defaultI18nValue: '支付方式',
    })
    payMethod: FormControl;

    @NgFormControl({
        id: 'telephone_a8621f05_4hyo',
        name: "{{telephone_a8621f05_4hyo}}",
        binding: 'telephone',
        updateOn: 'blur',
        defaultI18nValue: '联系电话',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    telephone: FormControl;

    @NgFormControl({
        id: 'sendState_3584b1dc_xv9j',
        name: "{{sendState_3584b1dc_xv9j}}",
        binding: 'sendState',
        updateOn: 'change',
        defaultI18nValue: '发货状态',
    })
    sendState: FormControl;

    @NgFormControl({
        id: 'remark_71281e54_dqeo',
        name: "{{remark_71281e54_dqeo}}",
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
        id: 'totalPrice_559ae1d0_tdrx',
        name: "{{totalPrice_559ae1d0_tdrx}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '订单金额',
    })
    totalPrice: FormControl;

    @NgFormControl({
        id: 'totalDiscounts_878ff42f_djm9',
        name: "{{totalDiscounts_878ff42f_djm9}}",
        binding: 'totalDiscounts',
        updateOn: 'blur',
        defaultI18nValue: '折扣优惠',
    })
    totalDiscounts: FormControl;

    @NgFormControl({
        id: 'actualPay_090e17ef_mvgt',
        name: "{{actualPay_090e17ef_mvgt}}",
        binding: 'actualPay',
        updateOn: 'blur',
        defaultI18nValue: '合计实付',
    })
    actualPay: FormControl;

    @NgFormControl({
        id: 'orderPerson_771cf8b5_32o4',
        name: "{{orderPerson_771cf8b5_32o4}}",
        binding: 'orderPerson.orderPerson',
        updateOn: 'blur',
        defaultI18nValue: '下单人',
    })
    orderPerson: FormControl;

    @NgFormControl({
        id: 'orderPerson_OrderPerson_name_676aa1fa_yg9q',
        name: "{{orderPerson_OrderPerson_name_676aa1fa_yg9q}}",
        binding: 'orderPerson.orderPerson_name',
        updateOn: 'blur',
        defaultI18nValue: '下单人名称',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    orderPerson_OrderPerson_name: FormControl;

}