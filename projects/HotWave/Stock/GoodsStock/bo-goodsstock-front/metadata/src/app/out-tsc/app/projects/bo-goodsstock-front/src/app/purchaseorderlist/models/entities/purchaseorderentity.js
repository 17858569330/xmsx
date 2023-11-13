import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, EntityList, NgList, NgEntity } from '@farris/devkit';
import { PurchaseDetailEntity } from './purchasedetailentity';
import { BillStateB3d1Entity } from './billstateb3d1entity';
import { ProcessInstanceA2d8Entity } from './processinstancea2d8entity';
import { MerChant619dEntity } from './merchant619dentity';
import { GspUserWithOrgNameF462Entity } from './gspuserwithorgnamef462entity';
var PurchaseOrderEntity = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderEntity, _super);
    function PurchaseOrderEntity() {
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
    ], PurchaseOrderEntity.prototype, "id", void 0);
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
    ], PurchaseOrderEntity.prototype, "version", void 0);
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
    ], PurchaseOrderEntity.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ExpectedTime',
            dataField: 'expectedTime',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'ExpectedTime',
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseOrderEntity.prototype, "expectedTime", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderTime',
            dataField: 'orderTime',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'OrderTime',
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseOrderEntity.prototype, "orderTime", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TotalPrice',
            dataField: 'totalPrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TotalPrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PurchaseOrderEntity.prototype, "totalPrice", void 0);
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
    ], PurchaseOrderEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'purchaseDetails',
            originalDataField: '',
            type: PurchaseDetailEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], PurchaseOrderEntity.prototype, "purchaseDetails", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'billStatus',
            originalDataField: 'BillStatus',
            type: BillStateB3d1Entity
        }),
        tslib_1.__metadata("design:type", BillStateB3d1Entity)
    ], PurchaseOrderEntity.prototype, "billStatus", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'processInstance',
            originalDataField: 'ProcessInstance',
            type: ProcessInstanceA2d8Entity
        }),
        tslib_1.__metadata("design:type", ProcessInstanceA2d8Entity)
    ], PurchaseOrderEntity.prototype, "processInstance", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'merchant',
            originalDataField: 'Merchant',
            type: MerChant619dEntity
        }),
        tslib_1.__metadata("design:type", MerChant619dEntity)
    ], PurchaseOrderEntity.prototype, "merchant", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'orderPerson',
            originalDataField: 'OrderPerson',
            type: GspUserWithOrgNameF462Entity
        }),
        tslib_1.__metadata("design:type", GspUserWithOrgNameF462Entity)
    ], PurchaseOrderEntity.prototype, "orderPerson", void 0);
    PurchaseOrderEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PurchaseOrder",
            nodeCode: "purchaseOrders"
        })
    ], PurchaseOrderEntity);
    return PurchaseOrderEntity;
}(Entity));
export { PurchaseOrderEntity };
