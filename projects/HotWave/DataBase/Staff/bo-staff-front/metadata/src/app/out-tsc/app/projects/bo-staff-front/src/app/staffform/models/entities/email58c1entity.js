import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Email58c1Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Email58c1Entity, _super);
    function Email58c1Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Email',
            dataField: 'email',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Mailbox.Email',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [500],
                    message: '最大长度为500',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Email58c1Entity.prototype, "email", void 0);
    Email58c1Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Mailbox",
            nodeCode: "mailbox"
        })
    ], Email58c1Entity);
    return Email58c1Entity;
}(Entity));
export { Email58c1Entity };
