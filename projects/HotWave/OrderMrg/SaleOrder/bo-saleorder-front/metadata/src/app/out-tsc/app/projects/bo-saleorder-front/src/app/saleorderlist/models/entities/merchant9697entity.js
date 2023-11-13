import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MerChant9697Entity = /** @class */ (function (_super) {
    tslib_1.__extends(MerChant9697Entity, _super);
    function MerChant9697Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Merchant',
            dataField: 'merchant',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Merchant.Merchant',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant9697Entity.prototype, "merchant", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantName',
            dataField: 'merchant_MerchantName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Merchant.Merchant_MerchantName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant9697Entity.prototype, "merchant_MerchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantCode',
            dataField: 'merchant_MerchantCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Merchant.Merchant_MerchantCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant9697Entity.prototype, "merchant_MerchantCode", void 0);
    MerChant9697Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Merchant",
            nodeCode: "merchant"
        })
    ], MerChant9697Entity);
    return MerChant9697Entity;
}(Entity));
export { MerChant9697Entity };
