import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MerChant619dEntity = /** @class */ (function (_super) {
    tslib_1.__extends(MerChant619dEntity, _super);
    function MerChant619dEntity() {
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
    ], MerChant619dEntity.prototype, "merchant", void 0);
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
    ], MerChant619dEntity.prototype, "merchant_MerchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantName(ParentMerchantID)',
            dataField: 'merchant_ParentMerchantID_MerchantName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Merchant.Merchant_ParentMerchantID_MerchantName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant619dEntity.prototype, "merchant_ParentMerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Adminstrator(ParentMerchantID)',
            dataField: 'merchant_ParentMerchantID_Adminstrator',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Merchant.Merchant_ParentMerchantID_Adminstrator',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant619dEntity.prototype, "merchant_ParentMerchantID_Adminstrator", void 0);
    MerChant619dEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Merchant",
            nodeCode: "merchant"
        })
    ], MerChant619dEntity);
    return MerChant619dEntity;
}(Entity));
export { MerChant619dEntity };
