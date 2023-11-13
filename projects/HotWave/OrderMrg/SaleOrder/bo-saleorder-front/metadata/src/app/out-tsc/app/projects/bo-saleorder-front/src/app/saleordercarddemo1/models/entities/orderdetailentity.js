import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { GoodsD382Entity } from './goodsd382entity';
var OrderDetailEntity = /** @class */ (function (_super) {
    tslib_1.__extends(OrderDetailEntity, _super);
    function OrderDetailEntity() {
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
    ], OrderDetailEntity.prototype, "id", void 0);
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
    ], OrderDetailEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], OrderDetailEntity.prototype, "specification", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Quality',
            dataField: 'quality',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Quality',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailEntity.prototype, "quality", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Price',
            dataField: 'price',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Price',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailEntity.prototype, "price", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Amount',
            dataField: 'amount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Amount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailEntity.prototype, "amount", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'DiscountType',
            dataField: 'discountType',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'none',
            path: 'DiscountType',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailEntity.prototype, "discountType", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Discount',
            dataField: 'discount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Discount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailEntity.prototype, "discount", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ActualAmount',
            dataField: 'actualAmount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'ActualAmount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailEntity.prototype, "actualAmount", void 0);
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
    ], OrderDetailEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'goods',
            originalDataField: 'Goods',
            type: GoodsD382Entity
        }),
        tslib_1.__metadata("design:type", GoodsD382Entity)
    ], OrderDetailEntity.prototype, "goods", void 0);
    OrderDetailEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "OrderDetail",
            nodeCode: "orderDetails"
        })
    ], OrderDetailEntity);
    return OrderDetailEntity;
}(Entity));
export { OrderDetailEntity };
