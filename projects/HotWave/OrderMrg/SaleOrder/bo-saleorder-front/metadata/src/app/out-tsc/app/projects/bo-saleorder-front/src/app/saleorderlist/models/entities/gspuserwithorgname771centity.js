import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUserWithOrgName771cEntity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUserWithOrgName771cEntity, _super);
    function GspUserWithOrgName771cEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderPerson',
            dataField: 'orderPerson',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'OrderPerson.OrderPerson',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUserWithOrgName771cEntity.prototype, "orderPerson", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'code',
            dataField: 'orderPerson_code',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'OrderPerson.OrderPerson_code',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [120],
                    message: '最大长度为120',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUserWithOrgName771cEntity.prototype, "orderPerson_code", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'name',
            dataField: 'orderPerson_name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'OrderPerson.OrderPerson_name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [120],
                    message: '最大长度为120',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUserWithOrgName771cEntity.prototype, "orderPerson_name", void 0);
    GspUserWithOrgName771cEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "OrderPerson",
            nodeCode: "orderPerson"
        })
    ], GspUserWithOrgName771cEntity);
    return GspUserWithOrgName771cEntity;
}(Entity));
export { GspUserWithOrgName771cEntity };
