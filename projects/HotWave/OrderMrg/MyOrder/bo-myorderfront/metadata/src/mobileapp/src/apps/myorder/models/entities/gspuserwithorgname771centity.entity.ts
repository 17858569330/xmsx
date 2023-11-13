
import { Entity, EntityList, PrimitivePropMeta, ObjectPropMeta, ListPropMeta, DynamicPropMeta, EntityMeta } from '@farris/mobile-devkit';

@EntityMeta({
    originalCode: "OrderPerson",
    nodeCode: "orderPerson"
})
export class GspUserWithOrgName771cEntity extends Entity {

    @PrimitivePropMeta({
        originalDataField: 'OrderPerson',
        dataField: 'orderPerson',
        primary: true,
        initValue: '',
    })
    orderPerson: string;

    @PrimitivePropMeta({
        originalDataField: 'code',
        dataField: 'orderPerson_code',
        initValue: '',
    })
    orderPerson_code: string;

    @PrimitivePropMeta({
        originalDataField: 'name',
        dataField: 'orderPerson_name',
        initValue: '',
    })
    orderPerson_name: string;

}