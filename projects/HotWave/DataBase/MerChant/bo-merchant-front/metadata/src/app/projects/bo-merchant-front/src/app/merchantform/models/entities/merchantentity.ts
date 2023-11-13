
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { PathHierarchyInfo82a6Entity } from './pathhierarchyinfo82a6entity';
import { MerChant2f79Entity } from './merchant2f79entity';

@NgEntity({
    originalCode: "MerChant",
    nodeCode: "merChants"
})
export class MerChantEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgField({
        originalDataField: 'MerchantName',
        dataField: 'merchantName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MerchantName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchantName: string;

    @NgField({
        originalDataField: 'MerchantCode',
        dataField: 'merchantCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MerchantCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    merchantCode: string;

    @NgField({
        originalDataField: 'CompanyType',
        dataField: 'companyType',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'qy',
        path: 'CompanyType',
    })
    companyType: any;

    @NgField({
        originalDataField: 'MerchantType',
        dataField: 'merchantType',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'rz',
        path: 'MerchantType',
    })
    merchantType: any;

    @NgField({
        originalDataField: 'RealName',
        dataField: 'realName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'RealName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    realName: string;

    @NgField({
        originalDataField: 'FullName',
        dataField: 'fullName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'FullName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [50],
                message: '最大长度为50',
            }
        ]
    })
    fullName: string;

    @NgField({
        originalDataField: 'BusinessLicense',
        dataField: 'businessLicense',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BusinessLicense',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    businessLicense: string;

    @NgField({
        originalDataField: 'Address',
        dataField: 'address',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Address',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    address: string;

    @NgField({
        originalDataField: 'Email',
        dataField: 'email',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Email',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    email: string;

    @NgField({
        originalDataField: 'Telephone',
        dataField: 'telephone',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Telephone',

        validRules: [
            {
                type: 'maxLength',
                constraints: [20],
                message: '最大长度为20',
            }
        ]
    })
    telephone: string;

    @NgField({
        originalDataField: 'Adminstrator',
        dataField: 'adminstrator',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Adminstrator',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    adminstrator: string;

    @NgField({
        originalDataField: 'Remark',
        dataField: 'remark',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Remark',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    remark: string;

    @NgObject({
        dataField: 'treeInfo',
        originalDataField: 'TreeInfo',
        hierarchyType:'path',
        type: PathHierarchyInfo82a6Entity
    })
    treeInfo: PathHierarchyInfo82a6Entity;
    @NgObject({
        dataField: 'parentMerchantID',
        originalDataField: 'ParentMerchantID',
        type: MerChant2f79Entity
    })
    parentMerchantID: MerChant2f79Entity;
}