import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUserWithOrgNameF462Entity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUserWithOrgNameF462Entity, _super);
    function GspUserWithOrgNameF462Entity() {
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
    ], GspUserWithOrgNameF462Entity.prototype, "orderPerson", void 0);
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
    ], GspUserWithOrgNameF462Entity.prototype, "orderPerson_name", void 0);
    GspUserWithOrgNameF462Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "OrderPerson",
            nodeCode: "orderPerson"
        })
    ], GspUserWithOrgNameF462Entity);
    return GspUserWithOrgNameF462Entity;
}(Entity));
export { GspUserWithOrgNameF462Entity };
