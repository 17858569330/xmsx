
import { Entity, EntityList, PrimitivePropMeta, ObjectPropMeta, ListPropMeta, DynamicPropMeta, EntityMeta } from '@farris/mobile-devkit';
import { GoodsD382Entity } from './goodsd382entity.entity';

@EntityMeta({
    originalCode: "OrderDetail",
    nodeCode: "orderDetails"
})
export class OrderDetailEntity extends Entity {

    @PrimitivePropMeta({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        initValue: '',
    })
    id: string;

    @PrimitivePropMeta({
        originalDataField: 'ParentID',
        dataField: 'parentID',
        initValue: '',
    })
    parentID: string;

    @PrimitivePropMeta({
        originalDataField: 'Specification',
        dataField: 'specification',
        initValue: '',
    })
    specification: string;

    @PrimitivePropMeta({
        originalDataField: 'Quality',
        dataField: 'quality',
        initValue: 0,
    })
    quality: number;

    @PrimitivePropMeta({
        originalDataField: 'Price',
        dataField: 'price',
        initValue: 0,
    })
    price: number;

    @PrimitivePropMeta({
        originalDataField: 'Amount',
        dataField: 'amount',
        initValue: 0,
    })
    amount: number;

    @PrimitivePropMeta({
        originalDataField: 'DiscountType',
        dataField: 'discountType',
        initValue: 'none',
    })
    discountType: any;

    @PrimitivePropMeta({
        originalDataField: 'Discount',
        dataField: 'discount',
        initValue: 0,
    })
    discount: number;

    @PrimitivePropMeta({
        originalDataField: 'ActualAmount',
        dataField: 'actualAmount',
        initValue: 0,
    })
    actualAmount: number;

    @PrimitivePropMeta({
        originalDataField: 'Remark',
        dataField: 'remark',
        initValue: '',
    })
    remark: string;

    @ObjectPropMeta({
        dataField: 'goods',
        originalDataField: 'Goods',
        type: GoodsD382Entity
    })
    goods: GoodsD382Entity;
}