
import { Entity, EntityList, PrimitivePropMeta, ObjectPropMeta, ListPropMeta, DynamicPropMeta, EntityMeta } from '@farris/mobile-devkit';

@EntityMeta({
    originalCode: "Merchant",
    nodeCode: "merchant"
})
export class MerChant9697Entity extends Entity {

    @PrimitivePropMeta({
        originalDataField: 'Merchant',
        dataField: 'merchant',
        primary: true,
        initValue: '',
    })
    merchant: string;

    @PrimitivePropMeta({
        originalDataField: 'MerchantName',
        dataField: 'merchant_MerchantName',
        initValue: '',
    })
    merchant_MerchantName: string;

    @PrimitivePropMeta({
        originalDataField: 'MerchantCode',
        dataField: 'merchant_MerchantCode',
        initValue: '',
    })
    merchant_MerchantCode: string;

}