
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { MerChant5521Entity } from './merchant5521entity';
import { Goods28baEntity } from './goods28baentity';

@NgEntity({
    originalCode: "GoodsStock",
    nodeCode: "goodsStocks"
})
export class GoodsStockEntity extends Entity {

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
        originalDataField: 'StockNum',
        dataField: 'stockNum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'StockNum',
    })
    stockNum: any;

    @NgField({
        originalDataField: 'DailySalesNum',
        dataField: 'dailySalesNum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'DailySalesNum',
    })
    dailySalesNum: any;

    @NgField({
        originalDataField: 'SafetyStockDays',
        dataField: 'safetyStockDays',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'SafetyStockDays',
    })
    safetyStockDays: any;

    @NgField({
        originalDataField: 'SafetyStockNum',
        dataField: 'safetyStockNum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'SafetyStockNum',
    })
    safetyStockNum: any;

    @NgField({
        originalDataField: 'InPurchaseNum',
        dataField: 'inPurchaseNum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'InPurchaseNum',
    })
    inPurchaseNum: any;

    @NgField({
        originalDataField: 'InSalesNum',
        dataField: 'inSalesNum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'InSalesNum',
    })
    inSalesNum: any;

    @NgField({
        originalDataField: 'SuggestPurchaseNum',
        dataField: 'suggestPurchaseNum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'SuggestPurchaseNum',
    })
    suggestPurchaseNum: any;

    @NgField({
        originalDataField: 'RecentPurchasePrice',
        dataField: 'recentPurchasePrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'RecentPurchasePrice',
    })
    recentPurchasePrice: any;

    @NgField({
        originalDataField: 'StockAmount',
        dataField: 'stockAmount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'StockAmount',
    })
    stockAmount: any;

    @NgObject({
        dataField: 'merchantID',
        originalDataField: 'MerchantID',
        type: MerChant5521Entity
    })
    merchantID: MerChant5521Entity;
    @NgObject({
        dataField: 'goodsID',
        originalDataField: 'GoodsID',
        type: Goods28baEntity
    })
    goodsID: Goods28baEntity;
}