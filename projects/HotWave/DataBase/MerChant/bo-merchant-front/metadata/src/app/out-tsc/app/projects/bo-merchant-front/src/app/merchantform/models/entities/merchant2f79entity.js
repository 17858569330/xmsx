import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MerChant2f79Entity = /** @class */ (function (_super) {
    tslib_1.__extends(MerChant2f79Entity, _super);
    function MerChant2f79Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ParentMerchantID',
            dataField: 'parentMerchantID',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentMerchantID.ParentMerchantID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant2f79Entity.prototype, "parentMerchantID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantName',
            dataField: 'parentMerchantID_MerchantName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentMerchantID.ParentMerchantID_MerchantName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant2f79Entity.prototype, "parentMerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Adminstrator',
            dataField: 'parentMerchantID_Adminstrator',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentMerchantID.ParentMerchantID_Adminstrator',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChant2f79Entity.prototype, "parentMerchantID_Adminstrator", void 0);
    MerChant2f79Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ParentMerchantID",
            nodeCode: "parentMerchantID"
        })
    ], MerChant2f79Entity);
    return MerChant2f79Entity;
}(Entity));
export { MerChant2f79Entity };
