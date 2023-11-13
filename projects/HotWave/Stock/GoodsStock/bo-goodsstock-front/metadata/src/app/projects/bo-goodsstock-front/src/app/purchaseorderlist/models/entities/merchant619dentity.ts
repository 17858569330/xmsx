
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Merchant",
    nodeCode: "merchant"
})
export class MerChant619dEntity extends Entity {

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
        originalDataField: 'MerchantName(ParentMerchantID)',
        dataField: 'merchant_ParentMerchantID_MerchantName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Merchant.Merchant_ParentMerchantID_MerchantName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchant_ParentMerchantID_MerchantName: string;

    @NgField({
        originalDataField: 'Adminstrator(ParentMerchantID)',
        dataField: 'merchant_ParentMerchantID_Adminstrator',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Merchant.Merchant_ParentMerchantID_Adminstrator',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchant_ParentMerchantID_Adminstrator: string;

}