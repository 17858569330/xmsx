
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Merchant",
    nodeCode: "merchant"
})
export class MerChant9697Entity extends Entity {

    @NgField({
        originalDataField: 'Merchant',
        dataField: 'merchant',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Merchant.Merchant',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchant: string;

    @NgField({
        originalDataField: 'MerchantName',
        dataField: 'merchant_MerchantName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Merchant.Merchant_MerchantName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchant_MerchantName: string;

    @NgField({
        originalDataField: 'MerchantCode',
        dataField: 'merchant_MerchantCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Merchant.Merchant_MerchantCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchant_MerchantCode: string;

}