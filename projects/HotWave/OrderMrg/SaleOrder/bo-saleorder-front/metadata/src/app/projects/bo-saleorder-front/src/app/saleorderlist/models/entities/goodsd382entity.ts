
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Goods",
    nodeCode: "goods"
})
export class GoodsD382Entity extends Entity {

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
        originalDataField: 'GoodsCode',
        dataField: 'goods_GoodsCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Goods.Goods_GoodsCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goods_GoodsCode: string;

}