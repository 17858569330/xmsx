import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, EntityList, NgList, NgEntity } from '@farris/devkit';
import { OrderDetailEntity } from './orderdetailentity';
import { MerChant9697Entity } from './merchant9697entity';
import { GspUserWithOrgName771cEntity } from './gspuserwithorgname771centity';
var SaleOrderEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SaleOrderEntity, _super);
    function SaleOrderEntity() {
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
    ], SaleOrderEntity.prototype, "id", void 0);
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
    ], SaleOrderEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderCode',
            dataField: 'orderCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'OrderCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SaleOrderEntity.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderTime',
            dataField: 'orderTime',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'OrderTime',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [30],
                    message: '最大长度为30',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SaleOrderEntity.prototype, "orderTime", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'PayMethod',
            dataField: 'payMethod',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'Cash',
            path: 'PayMethod',
        }),
        tslib_1.__metadata("design:type", Object)
    ], SaleOrderEntity.prototype, "payMethod", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Telephone',
            dataField: 'telephone',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Telephone',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [20],
                    message: '最大长度为20',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SaleOrderEntity.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SendState',
            dataField: 'sendState',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'UnShipped',
            path: 'SendState',
        }),
        tslib_1.__metadata("design:type", Object)
    ], SaleOrderEntity.prototype, "sendState", void 0);
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
    ], SaleOrderEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TotalPrice',
            dataField: 'totalPrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TotalPrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], SaleOrderEntity.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TotalDiscounts',
            dataField: 'totalDiscounts',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TotalDiscounts',
        }),
        tslib_1.__metadata("design:type", Object)
    ], SaleOrderEntity.prototype, "totalDiscounts", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ActualPay',
            dataField: 'actualPay',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'ActualPay',
        }),
        tslib_1.__metadata("design:type", Object)
    ], SaleOrderEntity.prototype, "actualPay", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderSource',
            dataField: 'orderSource',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'OrderSource',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [20],
                    message: '最大长度为20',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SaleOrderEntity.prototype, "orderSource", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'orderDetails',
            originalDataField: '',
            type: OrderDetailEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], SaleOrderEntity.prototype, "orderDetails", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'merchant',
            originalDataField: 'Merchant',
            type: MerChant9697Entity
        }),
        tslib_1.__metadata("design:type", MerChant9697Entity)
    ], SaleOrderEntity.prototype, "merchant", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'orderPerson',
            originalDataField: 'OrderPerson',
            type: GspUserWithOrgName771cEntity
        }),
        tslib_1.__metadata("design:type", GspUserWithOrgName771cEntity)
    ], SaleOrderEntity.prototype, "orderPerson", void 0);
    SaleOrderEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "SaleOrder",
            nodeCode: "saleOrders"
        })
    ], SaleOrderEntity);
    return SaleOrderEntity;
}(Entity));
export { SaleOrderEntity };
