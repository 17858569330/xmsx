import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var BillStateB3d1Entity = /** @class */ (function (_super) {
    tslib_1.__extends(BillStateB3d1Entity, _super);
    function BillStateB3d1Entity() {
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
    ], BillStateB3d1Entity.prototype, "billState", void 0);
    BillStateB3d1Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BillStatus",
            nodeCode: "billStatus"
        })
    ], BillStateB3d1Entity);
    return BillStateB3d1Entity;
}(Entity));
export { BillStateB3d1Entity };
