
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "GoodsID",
    nodeCode: "goodsID"
})
export class Goods28baEntity extends Entity {

    @NgField({
        originalDataField: 'GoodsID',
        dataField: 'goodsID',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'GoodsID.GoodsID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goodsID: string;

    @NgField({
        originalDataField: 'GoodsName',
        dataField: 'goodsID_GoodsName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'GoodsID.GoodsID_GoodsName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goodsID_GoodsName: string;

    @NgField({
        originalDataField: 'Specification',
        dataField: 'goodsID_Specification',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'GoodsID.GoodsID_Specification',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goodsID_Specification: string;

    @NgField({
        originalDataField: 'Category',
        dataField: 'goodsID_Category',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'GoodsID.GoodsID_Category',

        validRules: [
            {
                type: 'maxLength',
                constraints: [30],
                message: '最大长度为30',
            }
        ]
    })
    goodsID_Category: string;

    @NgField({
        originalDataField: 'Price',
        dataField: 'goodsID_Price',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'GoodsID.GoodsID_Price',
    })
    goodsID_Price: any;

    @NgField({
        originalDataField: 'Number',
        dataField: 'goodsID_Number',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'GoodsID.GoodsID_Number',
    })
    goodsID_Number: any;

}