import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var ProcessInstance4dc9Entity = /** @class */ (function (_super) {
    tslib_1.__extends(ProcessInstance4dc9Entity, _super);
    function ProcessInstance4dc9Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ProcessInstance',
            dataField: 'processInstance',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ProcessInstance.ProcessInstance',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], ProcessInstance4dc9Entity.prototype, "processInstance", void 0);
    ProcessInstance4dc9Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ProcessInstance",
            nodeCode: "processInstance"
        })
    ], ProcessInstance4dc9Entity);
    return ProcessInstance4dc9Entity;
}(Entity));
export { ProcessInstance4dc9Entity };
