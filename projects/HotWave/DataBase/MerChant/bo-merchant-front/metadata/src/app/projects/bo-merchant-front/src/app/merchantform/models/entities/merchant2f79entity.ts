
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "ParentMerchantID",
    nodeCode: "parentMerchantID"
})
export class MerChant2f79Entity extends Entity {

    @NgField({
        originalDataField: 'ParentMerchantID',
        dataField: 'parentMerchantID',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentMerchantID.ParentMerchantID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    parentMerchantID: string;

    @NgField({
        originalDataField: 'MerchantName',
        dataField: 'parentMerchantID_MerchantName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentMerchantID.ParentMerchantID_MerchantName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    parentMerchantID_MerchantName: string;

    @NgField({
        originalDataField: 'Adminstrator',
        dataField: 'parentMerchantID_Adminstrator',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentMerchantID.ParentMerchantID_Adminstrator',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    parentMerchantID_Adminstrator: string;

}