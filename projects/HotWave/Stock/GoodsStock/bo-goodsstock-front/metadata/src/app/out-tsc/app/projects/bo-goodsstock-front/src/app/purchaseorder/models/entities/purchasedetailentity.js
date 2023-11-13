import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { Goods889cEntity } from './goods889centity';
var PurchaseDetailEntity = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseDetailEntity, _super);
    function PurchaseDetailEntity() {
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
    ], PurchaseDetailEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseDetailEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Quality',
            dataField: 'quality',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Quality',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PurchaseDetailEntity.prototype, "quality", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Price',
            dataField: 'price',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Price',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PurchaseDetailEntity.prototype, "price", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Amount',
            dataField: 'amount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Amount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PurchaseDetailEntity.prototype, "amount", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseDetailEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'goods',
            originalDataField: 'Goods',
            type: Goods889cEntity
        }),
        tslib_1.__metadata("design:type", Goods889cEntity)
    ], PurchaseDetailEntity.prototype, "goods", void 0);
    PurchaseDetailEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PurchaseDetail",
            nodeCode: "purchaseDetails"
        })
    ], PurchaseDetailEntity);
    return PurchaseDetailEntity;
}(Entity));
export { PurchaseDetailEntity };
