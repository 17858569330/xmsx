
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { GoodsD382Entity } from './goodsd382entity';

@NgEntity({
    originalCode: "OrderDetail",
    nodeCode: "orderDetails"
})
export class OrderDetailEntity extends Entity {

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
        originalDataField: 'ParentID',
        dataField: 'parentID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentID',

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
    parentID: string;

    @NgField({
        originalDataField: 'Specification',
        dataField: 'specification',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Specification',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    specification: string;

    @NgField({
        originalDataField: 'Quality',
        dataField: 'quality',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Quality',
    })
    quality: any;

    @NgField({
        originalDataField: 'Price',
        dataField: 'price',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Price',
    })
    price: any;

    @NgField({
        originalDataField: 'Amount',
        dataField: 'amount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Amount',
    })
    amount: any;

    @NgField({
        originalDataField: 'DiscountType',
        dataField: 'discountType',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'none',
        path: 'DiscountType',
    })
    discountType: any;

    @NgField({
        originalDataField: 'Discount',
        dataField: 'discount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Discount',
    })
    discount: any;

    @NgField({
        originalDataField: 'ActualAmount',
        dataField: 'actualAmount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'ActualAmount',
    })
    actualAmount: any;

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
        dataField: 'goods',
        originalDataField: 'Goods',
        type: GoodsD382Entity
    })
    goods: GoodsD382Entity;
}