import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MerChantEd6EEntity = /** @class */ (function (_super) {
    tslib_1.__extends(MerChantEd6EEntity, _super);
    function MerChantEd6EEntity() {
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
    ], MerChantEd6EEntity.prototype, "parentMerchantID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'parentMerchantID_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentMerchantID.ParentMerchantID_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEd6EEntity.prototype, "parentMerchantID_ID", void 0);
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
    ], MerChantEd6EEntity.prototype, "parentMerchantID_MerchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantCode',
            dataField: 'parentMerchantID_MerchantCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentMerchantID.ParentMerchantID_MerchantCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEd6EEntity.prototype, "parentMerchantID_MerchantCode", void 0);
    MerChantEd6EEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ParentMerchantID",
            nodeCode: "parentMerchantID"
        })
    ], MerChantEd6EEntity);
    return MerChantEd6EEntity;
}(Entity));
export { MerChantEd6EEntity };
