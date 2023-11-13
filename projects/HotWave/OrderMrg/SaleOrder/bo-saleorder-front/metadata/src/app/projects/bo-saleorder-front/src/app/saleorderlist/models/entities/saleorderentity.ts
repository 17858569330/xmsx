
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { OrderDetailEntity } from './orderdetailentity';
import { MerChant9697Entity } from './merchant9697entity';
import { GspUserWithOrgName771cEntity } from './gspuserwithorgname771centity';

@NgEntity({
    originalCode: "SaleOrder",
    nodeCode: "saleOrders"
})
export class SaleOrderEntity extends Entity {

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
        originalDataField: 'OrderTime',
        dataField: 'orderTime',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderTime',

        validRules: [
            {
                type: 'maxLength',
                constraints: [30],
                message: '最大长度为30',
            }
        ]
    })
    orderTime: string;

    @NgField({
        originalDataField: 'PayMethod',
        dataField: 'payMethod',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'Cash',
        path: 'PayMethod',
    })
    payMethod: any;

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
        originalDataField: 'SendState',
        dataField: 'sendState',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'UnShipped',
        path: 'SendState',
    })
    sendState: any;

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

    @NgField({
        originalDataField: 'TotalPrice',
        dataField: 'totalPrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalPrice',
    })
    totalPrice: any;

    @NgField({
        originalDataField: 'TotalDiscounts',
        dataField: 'totalDiscounts',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalDiscounts',
    })
    totalDiscounts: any;

    @NgField({
        originalDataField: 'ActualPay',
        dataField: 'actualPay',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'ActualPay',
    })
    actualPay: any;

    @NgField({
        originalDataField: 'OrderSource',
        dataField: 'orderSource',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderSource',

        validRules: [
            {
                type: 'maxLength',
                constraints: [20],
                message: '最大长度为20',
            }
        ]
    })
    orderSource: string;

    @NgList({
        dataField: 'orderDetails',
        originalDataField: '',
        type: OrderDetailEntity

    })

    orderDetails: EntityList<OrderDetailEntity>;
    @NgObject({
        dataField: 'merchant',
        originalDataField: 'Merchant',
        type: MerChant9697Entity
    })
    merchant: MerChant9697Entity;
    @NgObject({
        dataField: 'orderPerson',
        originalDataField: 'OrderPerson',
        type: GspUserWithOrgName771cEntity
    })
    orderPerson: GspUserWithOrgName771cEntity;
}