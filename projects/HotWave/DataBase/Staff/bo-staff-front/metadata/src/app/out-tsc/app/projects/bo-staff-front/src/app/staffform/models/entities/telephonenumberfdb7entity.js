import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var TelephoneNumberFdb7Entity = /** @class */ (function (_super) {
    tslib_1.__extends(TelephoneNumberFdb7Entity, _super);
    function TelephoneNumberFdb7Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TelephoneNumber',
            dataField: 'telephoneNumber',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Telephone.TelephoneNumber',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [18],
                    message: '最大长度为18',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], TelephoneNumberFdb7Entity.prototype, "telephoneNumber", void 0);
    TelephoneNumberFdb7Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Telephone",
            nodeCode: "telephone"
        })
    ], TelephoneNumberFdb7Entity);
    return TelephoneNumberFdb7Entity;
}(Entity));
export { TelephoneNumberFdb7Entity };
