import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MerChant5521Entity = /** @class */ (function (_super) {
    tslib_1.__extends(MerChant5521Entity, _super);
    function MerChant5521Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantID',
            dataField: 'merchantID',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MerchantID.MerchantID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant5521Entity.prototype, "merchantID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantName',
            dataField: 'merchantID_MerchantName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MerchantID.MerchantID_MerchantName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant5521Entity.prototype, "merchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantName(ParentMerchantID)',
            dataField: 'merchantID_ParentMerchantID_MerchantName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MerchantID.MerchantID_ParentMerchantID_MerchantName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant5521Entity.prototype, "merchantID_ParentMerchantID_MerchantName", void 0);
    MerChant5521Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MerchantID",
            nodeCode: "merchantID"
        })
    ], MerChant5521Entity);
    return MerChant5521Entity;
}(Entity));
export { MerChant5521Entity };
