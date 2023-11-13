import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Goods28baEntity = /** @class */ (function (_super) {
    tslib_1.__extends(Goods28baEntity, _super);
    function Goods28baEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'GoodsID',
            dataField: 'goodsID',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'GoodsID.GoodsID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods28baEntity.prototype, "goodsID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'GoodsName',
            dataField: 'goodsID_GoodsName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'GoodsID.GoodsID_GoodsName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods28baEntity.prototype, "goodsID_GoodsName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Specification',
            dataField: 'goodsID_Specification',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'GoodsID.GoodsID_Specification',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods28baEntity.prototype, "goodsID_Specification", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Category',
            dataField: 'goodsID_Category',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'GoodsID.GoodsID_Category',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [30],
                    message: '最大长度为30',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods28baEntity.prototype, "goodsID_Category", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Price',
            dataField: 'goodsID_Price',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'GoodsID.GoodsID_Price',
        }),
        tslib_1.__metadata("design:type", Object)
    ], Goods28baEntity.prototype, "goodsID_Price", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Number',
            dataField: 'goodsID_Number',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'GoodsID.GoodsID_Number',
        }),
        tslib_1.__metadata("design:type", Object)
    ], Goods28baEntity.prototype, "goodsID_Number", void 0);
    Goods28baEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "GoodsID",
            nodeCode: "goodsID"
        })
    ], Goods28baEntity);
    return Goods28baEntity;
}(Entity));
export { Goods28baEntity };
