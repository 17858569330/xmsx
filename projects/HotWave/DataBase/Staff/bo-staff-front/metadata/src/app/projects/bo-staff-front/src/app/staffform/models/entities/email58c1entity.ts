
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Mailbox",
    nodeCode: "mailbox"
})
export class Email58c1Entity extends Entity {

    @NgField({
        originalDataField: 'Email',
        dataField: 'email',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Mailbox.Email',

        validRules: [
            {
                type: 'maxLength',
                constraints: [500],
                message: '最大长度为500',
            }
        ]
    })
    email: string;

}