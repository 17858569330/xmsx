import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GoodsQueryFormFrmEntity = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsQueryFormFrmEntity, _super);
    function GoodsQueryFormFrmEntity() {
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
    ], GoodsQueryFormFrmEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Goods_GoodsName',
            dataField: 'goods_GoodsName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Goods_GoodsName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GoodsQueryFormFrmEntity.prototype, "goods_GoodsName", void 0);
    GoodsQueryFormFrmEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "GoodsQueryForm_frm",
            nodeCode: "goodsQueryForm_frms"
        })
    ], GoodsQueryFormFrmEntity);
    return GoodsQueryFormFrmEntity;
}(Entity));
export { GoodsQueryFormFrmEntity };
