
import { Entity, EntityList, PrimitivePropMeta, ObjectPropMeta, ListPropMeta, DynamicPropMeta, EntityMeta } from '@farris/mobile-devkit';
import { OrderDetailEntity } from './orderdetailentity.entity';
import { MerChant9697Entity } from './merchant9697entity.entity';
import { GspUserWithOrgName771cEntity } from './gspuserwithorgname771centity.entity';

@EntityMeta({
    originalCode: "SaleOrder",
    nodeCode: "saleOrders"
})
export class SaleOrderEntity extends Entity {

    @PrimitivePropMeta({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        initValue: '',
    })
    id: string;

    @PrimitivePropMeta({
        originalDataField: 'Version',
        dataField: 'version',
        initValue: '0001-01-01T00:00:00',
    })
    version: string;

    @PrimitivePropMeta({
        originalDataField: 'OrderCode',
        dataField: 'orderCode',
        initValue: '',
    })
    orderCode: string;

    @PrimitivePropMeta({
        originalDataField: 'OrderTime',
        dataField: 'orderTime',
        initValue: '',
    })
    orderTime: string;

    @PrimitivePropMeta({
        originalDataField: 'PayMethod',
        dataField: 'payMethod',
        initValue: 'Cash',
    })
    payMethod: any;

    @PrimitivePropMeta({
        originalDataField: 'Telephone',
        dataField: 'telephone',
        initValue: '',
    })
    telephone: string;

    @PrimitivePropMeta({
        originalDataField: 'SendState',
        dataField: 'sendState',
        initValue: 'UnShipped',
    })
    sendState: any;

    @PrimitivePropMeta({
        originalDataField: 'Remark',
        dataField: 'remark',
        initValue: '',
    })
    remark: string;

    @PrimitivePropMeta({
        originalDataField: 'TotalPrice',
        dataField: 'totalPrice',
        initValue: 0,
    })
    totalPrice: number;

    @PrimitivePropMeta({
        originalDataField: 'TotalDiscounts',
        dataField: 'totalDiscounts',
        initValue: 0,
    })
    totalDiscounts: number;

    @PrimitivePropMeta({
        originalDataField: 'ActualPay',
        dataField: 'actualPay',
        initValue: 0,
    })
    actualPay: number;

    @PrimitivePropMeta({
        originalDataField: 'OrderSource',
        dataField: 'orderSource',
        initValue: '',
    })
    orderSource: string;

    @ListPropMeta({
        dataField: 'orderDetails',
        originalDataField: '',
        type: OrderDetailEntity

    })

    orderDetails: EntityList<OrderDetailEntity>;
    @ObjectPropMeta({
        dataField: 'merchant',
        originalDataField: 'Merchant',
        type: MerChant9697Entity
    })
    merchant: MerChant9697Entity;
    @ObjectPropMeta({
        dataField: 'orderPerson',
        originalDataField: 'OrderPerson',
        type: GspUserWithOrgName771cEntity
    })
    orderPerson: GspUserWithOrgName771cEntity;
}