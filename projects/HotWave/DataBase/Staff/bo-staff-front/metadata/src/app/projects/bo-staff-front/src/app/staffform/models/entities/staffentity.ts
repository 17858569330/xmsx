
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { TelephoneNumberFdb7Entity } from './telephonenumberfdb7entity';
import { Email58c1Entity } from './email58c1entity';

@NgEntity({
    originalCode: "Staff",
    nodeCode: "staffs"
})
export class StaffEntity extends Entity {

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
        originalDataField: 'Name',
        dataField: 'name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [1000],
                message: '最大长度为1000',
            }
        ]
    })
    name: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [1000],
                message: '最大长度为1000',
            }
        ]
    })
    code: string;

    @NgField({
        originalDataField: 'Merchant',
        dataField: 'merchant',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Merchant',

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
        originalDataField: 'IDNumber',
        dataField: 'idNumber',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'IDNumber',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    idNumber: string;

    @NgField({
        originalDataField: 'OrCorPor',
        dataField: 'orCorPor',
        originalDataFieldType: 'Boolean',
        initValue: false,
        path: 'OrCorPor',
    })
    orCorPor: any;

    @NgObject({
        dataField: 'telephone',
        originalDataField: 'Telephone',
        type: TelephoneNumberFdb7Entity
    })
    telephone: TelephoneNumberFdb7Entity;
    @NgObject({
        dataField: 'mailbox',
        originalDataField: 'Mailbox',
        type: Email58c1Entity
    })
    mailbox: Email58c1Entity;
}