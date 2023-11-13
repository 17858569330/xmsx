
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Goods",
    nodeCode: "goods"
})
export class Goods889cEntity extends Entity {

    @NgField({
        originalDataField: 'Goods',
        dataField: 'goods',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Goods.Goods',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goods: string;

    @NgField({
        originalDataField: 'GoodsName',
        dataField: 'goods_GoodsName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Goods.Goods_GoodsName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goods_GoodsName: string;

    @NgField({
        originalDataField: 'Specification',
        dataField: 'goods_Specification',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Goods.Goods_Specification',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goods_Specification: string;

    @NgField({
        originalDataField: 'Price',
        dataField: 'goods_Price',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Goods.Goods_Price',
    })
    goods_Price: any;

}