import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { PathHierarchyInfo82a6Entity } from './pathhierarchyinfo82a6entity';
import { MerChant2f79Entity } from './merchant2f79entity';
var MerChantEntity = /** @class */ (function (_super) {
    tslib_1.__extends(MerChantEntity, _super);
    function MerChantEntity() {
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
    ], MerChantEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Version',
            dataField: 'version',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantName',
            dataField: 'merchantName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MerchantName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "merchantName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantCode',
            dataField: 'merchantCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MerchantCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "merchantCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CompanyType',
            dataField: 'companyType',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'qy',
            path: 'CompanyType',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MerChantEntity.prototype, "companyType", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MerchantType',
            dataField: 'merchantType',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'rz',
            path: 'MerchantType',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MerChantEntity.prototype, "merchantType", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'RealName',
            dataField: 'realName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'RealName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "realName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'FullName',
            dataField: 'fullName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'FullName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [50],
                    message: '最大长度为50',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "fullName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'BusinessLicense',
            dataField: 'businessLicense',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'BusinessLicense',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "businessLicense", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Address',
            dataField: 'address',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Address',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "address", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Email',
            dataField: 'email',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Email',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "email", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Telephone',
            dataField: 'telephone',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Telephone',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [20],
                    message: '最大长度为20',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Adminstrator',
            dataField: 'adminstrator',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Adminstrator',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "adminstrator", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Remark',
            dataField: 'remark',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Remark',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MerChantEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'treeInfo',
            originalDataField: 'TreeInfo',
            hierarchyType: 'path',
            type: PathHierarchyInfo82a6Entity
        }),
        tslib_1.__metadata("design:type", PathHierarchyInfo82a6Entity)
    ], MerChantEntity.prototype, "treeInfo", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'parentMerchantID',
            originalDataField: 'ParentMerchantID',
            type: MerChant2f79Entity
        }),
        tslib_1.__metadata("design:type", MerChant2f79Entity)
    ], MerChantEntity.prototype, "parentMerchantID", void 0);
    MerChantEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MerChant",
            nodeCode: "merChants"
        })
    ], MerChantEntity);
    return MerChantEntity;
}(Entity));
export { MerChantEntity };
