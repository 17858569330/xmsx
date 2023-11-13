import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PathHierarchyInfo82a6Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PathHierarchyInfo82a6Entity, _super);
    function PathHierarchyInfo82a6Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Path',
            dataField: 'path',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'TreeInfo.Path',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], PathHierarchyInfo82a6Entity.prototype, "path", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Layer',
            dataField: 'layer',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TreeInfo.Layer',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PathHierarchyInfo82a6Entity.prototype, "layer", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'IsDetail',
            dataField: 'isDetail',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'TreeInfo.IsDetail',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PathHierarchyInfo82a6Entity.prototype, "isDetail", void 0);
    PathHierarchyInfo82a6Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "TreeInfo",
            nodeCode: "treeInfo"
        })
    ], PathHierarchyInfo82a6Entity);
    return PathHierarchyInfo82a6Entity;
}(Entity));
export { PathHierarchyInfo82a6Entity };
