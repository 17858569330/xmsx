
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { PurchaseDetailEntity } from './purchasedetailentity';
import { BillStateAfb7Entity } from './billstateafb7entity';
import { ProcessInstance4dc9Entity } from './processinstance4dc9entity';
import { MerChant619dEntity } from './merchant619dentity';
import { GspUserWithOrgNameF462Entity } from './gspuserwithorgnamef462entity';

@NgEntity({
    originalCode: "PurchaseOrder",
    nodeCode: "purchaseOrders"
})
export class PurchaseOrderEntity extends Entity {

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
        originalDataField: 'OrderCode',
        dataField: 'orderCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    orderCode: string;

    @NgField({
        originalDataField: 'ExpectedTime',
        dataField: 'expectedTime',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'ExpectedTime',
    })
    expectedTime: string;

    @NgField({
        originalDataField: 'OrderTime',
        dataField: 'orderTime',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'OrderTime',
    })
    orderTime: string;

    @NgField({
        originalDataField: 'TotalPrice',
        dataField: 'totalPrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalPrice',
    })
    totalPrice: any;

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

    @NgList({
        dataField: 'purchaseDetails',
        originalDataField: '',
        type: PurchaseDetailEntity

    })

    purchaseDetails: EntityList<PurchaseDetailEntity>;
    @NgObject({
        dataField: 'billStatus',
        originalDataField: 'BillStatus',
        type: BillStateAfb7Entity
    })
    billStatus: BillStateAfb7Entity;
    @NgObject({
        dataField: 'processInstance',
        originalDataField: 'ProcessInstance',
        type: ProcessInstance4dc9Entity
    })
    processInstance: ProcessInstance4dc9Entity;
    @NgObject({
        dataField: 'merchant',
        originalDataField: 'Merchant',
        type: MerChant619dEntity
    })
    merchant: MerChant619dEntity;
    @NgObject({
        dataField: 'orderPerson',
        originalDataField: 'OrderPerson',
        type: GspUserWithOrgNameF462Entity
    })
    orderPerson: GspUserWithOrgNameF462Entity;
}