import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var BillStateAfb7Entity = /** @class */ (function (_super) {
    tslib_1.__extends(BillStateAfb7Entity, _super);
    function BillStateAfb7Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'BillState',
            dataField: 'billState',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'Billing',
            path: 'BillStatus.BillState',
        }),
        tslib_1.__metadata("design:type", Object)
    ], BillStateAfb7Entity.prototype, "billState", void 0);
    BillStateAfb7Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BillStatus",
            nodeCode: "billStatus"
        })
    ], BillStateAfb7Entity);
    return BillStateAfb7Entity;
}(Entity));
export { BillStateAfb7Entity };
