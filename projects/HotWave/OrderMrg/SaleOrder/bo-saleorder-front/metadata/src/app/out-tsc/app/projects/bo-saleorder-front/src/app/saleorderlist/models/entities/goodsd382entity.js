import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GoodsD382Entity = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsD382Entity, _super);
    function GoodsD382Entity() {
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
    ], GoodsD382Entity.prototype, "goods", void 0);
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
    ], GoodsD382Entity.prototype, "goods_GoodsName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'GoodsCode',
            dataField: 'goods_GoodsCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Goods.Goods_GoodsCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsD382Entity.prototype, "goods_GoodsCode", void 0);
    GoodsD382Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Goods",
            nodeCode: "goods"
        })
    ], GoodsD382Entity);
    return GoodsD382Entity;
}(Entity));
export { GoodsD382Entity };
