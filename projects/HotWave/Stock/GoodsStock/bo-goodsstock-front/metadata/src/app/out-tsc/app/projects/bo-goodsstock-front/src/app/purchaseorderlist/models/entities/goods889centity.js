import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Goods889cEntity = /** @class */ (function (_super) {
    tslib_1.__extends(Goods889cEntity, _super);
    function Goods889cEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Goods',
            dataField: 'goods',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Goods.Goods',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods889cEntity.prototype, "goods", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'GoodsName',
            dataField: 'goods_GoodsName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Goods.Goods_GoodsName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods889cEntity.prototype, "goods_GoodsName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Specification',
            dataField: 'goods_Specification',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Goods.Goods_Specification',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Goods889cEntity.prototype, "goods_Specification", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Price',
            dataField: 'goods_Price',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Goods.Goods_Price',
        }),
        tslib_1.__metadata("design:type", Object)
    ], Goods889cEntity.prototype, "goods_Price", void 0);
    Goods889cEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Goods",
            nodeCode: "goods"
        })
    ], Goods889cEntity);
    return Goods889cEntity;
}(Entity));
export { Goods889cEntity };
