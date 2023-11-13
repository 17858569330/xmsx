
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "MerchantID",
    nodeCode: "merchantID"
})
export class MerChant5521Entity extends Entity {

    @NgField({
        originalDataField: 'MerchantID',
        dataField: 'merchantID',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MerchantID.MerchantID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchantID: string;

    @NgField({
        originalDataField: 'MerchantName',
        dataField: 'merchantID_MerchantName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MerchantID.MerchantID_MerchantName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchantID_MerchantName: string;

    @NgField({
        originalDataField: 'MerchantName(ParentMerchantID)',
        dataField: 'merchantID_ParentMerchantID_MerchantName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MerchantID.MerchantID_ParentMerchantID_MerchantName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchantID_ParentMerchantID_MerchantName: string;

}