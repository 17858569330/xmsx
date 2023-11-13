import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { TelephoneNumberFdb7Entity } from './telephonenumberfdb7entity';
import { Email58c1Entity } from './email58c1entity';
var StaffEntity = /** @class */ (function (_super) {
    tslib_1.__extends(StaffEntity, _super);
    function StaffEntity() {
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
    ], StaffEntity.prototype, "id", void 0);
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
    ], StaffEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [1000],
                    message: '最大长度为1000',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StaffEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Code',
            dataField: 'code',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Code',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [1000],
                    message: '最大长度为1000',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StaffEntity.prototype, "code", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Merchant',
            dataField: 'merchant',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Merchant',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StaffEntity.prototype, "merchant", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'IDNumber',
            dataField: 'idNumber',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'IDNumber',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StaffEntity.prototype, "idNumber", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrCorPor',
            dataField: 'orCorPor',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'OrCorPor',
        }),
        tslib_1.__metadata("design:type", Object)
    ], StaffEntity.prototype, "orCorPor", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'telephone',
            originalDataField: 'Telephone',
            type: TelephoneNumberFdb7Entity
        }),
        tslib_1.__metadata("design:type", TelephoneNumberFdb7Entity)
    ], StaffEntity.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'mailbox',
            originalDataField: 'Mailbox',
            type: Email58c1Entity
        }),
        tslib_1.__metadata("design:type", Email58c1Entity)
    ], StaffEntity.prototype, "mailbox", void 0);
    StaffEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Staff",
            nodeCode: "staffs"
        })
    ], StaffEntity);
    return StaffEntity;
}(Entity));
export { StaffEntity };
