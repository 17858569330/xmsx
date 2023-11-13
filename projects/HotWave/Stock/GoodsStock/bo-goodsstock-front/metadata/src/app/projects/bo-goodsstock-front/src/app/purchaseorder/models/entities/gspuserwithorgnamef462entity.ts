
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "OrderPerson",
    nodeCode: "orderPerson"
})
export class GspUserWithOrgNameF462Entity extends Entity {

    @NgField({
        originalDataField: 'OrderPerson',
        dataField: 'orderPerson',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderPerson.OrderPerson',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    orderPerson: string;

    @NgField({
        originalDataField: 'name',
        dataField: 'orderPerson_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderPerson.OrderPerson_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [120],
                message: '最大长度为120',
            }
        ]
    })
    orderPerson_name: string;

}