
import { Entity, EntityList, PrimitivePropMeta, ObjectPropMeta, ListPropMeta, DynamicPropMeta, EntityMeta } from '@farris/mobile-devkit';

@EntityMeta({
    originalCode: "Goods",
    nodeCode: "goods"
})
export class GoodsD382Entity extends Entity {

    @PrimitivePropMeta({
        originalDataField: 'Goods',
        dataField: 'goods',
        primary: true,
        initValue: '',
    })
    goods: string;

    @PrimitivePropMeta({
        originalDataField: 'GoodsName',
        dataField: 'goods_GoodsName',
        initValue: '',
    })
    goods_GoodsName: string;

    @PrimitivePropMeta({
        originalDataField: 'GoodsCode',
        dataField: 'goods_GoodsCode',
        initValue: '',
    })
    goods_GoodsCode: string;

}