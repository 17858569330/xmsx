
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "BillStatus",
    nodeCode: "billStatus"
})
export class BillStateB3d1Entity extends Entity {

    @NgField({
        originalDataField: 'BillState',
        dataField: 'billState',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'Billing',
        path: 'BillStatus.BillState',
    })
    billState: any;

}