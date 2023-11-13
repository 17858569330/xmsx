
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Goods",
    nodeCode: "goodss"
})
export class GoodsEntity extends Entity {

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
        originalDataField: 'GoodsName',
        dataField: 'goodsName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'GoodsName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goodsName: string;

    @NgField({
        originalDataField: 'GoodsCode',
        dataField: 'goodsCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'GoodsCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    goodsCode: string;

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
        originalDataField: 'Category',
        dataField: 'category',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Category',

        validRules: [
            {
                type: 'maxLength',
                constraints: [30],
                message: '最大长度为30',
            }
        ]
    })
    category: string;

    @NgField({
        originalDataField: 'Price',
        dataField: 'price',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Price',
    })
    price: any;

    @NgField({
        originalDataField: 'Number',
        dataField: 'number',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Number',
    })
    number: any;

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

}