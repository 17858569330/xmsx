import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var ProcessInstanceA2d8Entity = /** @class */ (function (_super) {
    tslib_1.__extends(ProcessInstanceA2d8Entity, _super);
    function ProcessInstanceA2d8Entity() {
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
    ], ProcessInstanceA2d8Entity.prototype, "processInstance", void 0);
    ProcessInstanceA2d8Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ProcessInstance",
            nodeCode: "processInstance"
        })
    ], ProcessInstanceA2d8Entity);
    return ProcessInstanceA2d8Entity;
}(Entity));
export { ProcessInstanceA2d8Entity };
