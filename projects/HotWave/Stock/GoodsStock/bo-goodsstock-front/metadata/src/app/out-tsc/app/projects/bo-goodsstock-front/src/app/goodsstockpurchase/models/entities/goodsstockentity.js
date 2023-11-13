import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { MerChant5521Entity } from './merchant5521entity';
import { Goods28baEntity } from './goods28baentity';
var GoodsStockEntity = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsStockEntity, _super);
    function GoodsStockEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsStockEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Version',
            dataField: 'version',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsStockEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'StockNum',
            dataField: 'stockNum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'StockNum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "stockNum", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'DailySalesNum',
            dataField: 'dailySalesNum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'DailySalesNum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "dailySalesNum", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SafetyStockDays',
            dataField: 'safetyStockDays',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'SafetyStockDays',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "safetyStockDays", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SafetyStockNum',
            dataField: 'safetyStockNum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'SafetyStockNum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "safetyStockNum", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'InPurchaseNum',
            dataField: 'inPurchaseNum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'InPurchaseNum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "inPurchaseNum", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'InSalesNum',
            dataField: 'inSalesNum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'InSalesNum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "inSalesNum", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SuggestPurchaseNum',
            dataField: 'suggestPurchaseNum',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'SuggestPurchaseNum',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "suggestPurchaseNum", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'RecentPurchasePrice',
            dataField: 'recentPurchasePrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'RecentPurchasePrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "recentPurchasePrice", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'StockAmount',
            dataField: 'stockAmount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'StockAmount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsStockEntity.prototype, "stockAmount", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'merchantID',
            originalDataField: 'MerchantID',
            type: MerChant5521Entity
        }),
        tslib_1.__metadata("design:type", MerChant5521Entity)
    ], GoodsStockEntity.prototype, "merchantID", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'goodsID',
            originalDataField: 'GoodsID',
            type: Goods28baEntity
        }),
        tslib_1.__metadata("design:type", Goods28baEntity)
    ], GoodsStockEntity.prototype, "goodsID", void 0);
    GoodsStockEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "GoodsStock",
            nodeCode: "goodsStocks"
        })
    ], GoodsStockEntity);
    return GoodsStockEntity;
}(Entity));
export { GoodsStockEntity };
