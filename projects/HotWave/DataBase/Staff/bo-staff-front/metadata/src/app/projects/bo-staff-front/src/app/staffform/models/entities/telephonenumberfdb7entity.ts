
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Telephone",
    nodeCode: "telephone"
})
export class TelephoneNumberFdb7Entity extends Entity {

    @NgField({
        originalDataField: 'TelephoneNumber',
        dataField: 'telephoneNumber',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Telephone.TelephoneNumber',

        validRules: [
            {
                type: 'maxLength',
                constraints: [18],
                message: '最大长度为18',
            }
        ]
    })
    telephoneNumber: string;

}