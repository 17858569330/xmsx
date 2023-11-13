import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GoodsEntity = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsEntity, _super);
    function GoodsEntity() {
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
    ], GoodsEntity.prototype, "id", void 0);
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
    ], GoodsEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'GoodsName',
            dataField: 'goodsName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'GoodsName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsEntity.prototype, "goodsName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'GoodsCode',
            dataField: 'goodsCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'GoodsCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsEntity.prototype, "goodsCode", void 0);
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
    ], GoodsEntity.prototype, "specification", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Category',
            dataField: 'category',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Category',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [30],
                    message: '最大长度为30',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsEntity.prototype, "category", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Price',
            dataField: 'price',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Price',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsEntity.prototype, "price", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Number',
            dataField: 'number',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Number',
        }),
        tslib_1.__metadata("design:type", Object)
    ], GoodsEntity.prototype, "number", void 0);
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
    ], GoodsEntity.prototype, "remark", void 0);
    GoodsEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Goods",
            nodeCode: "goodss"
        })
    ], GoodsEntity);
    return GoodsEntity;
}(Entity));
export { GoodsEntity };
