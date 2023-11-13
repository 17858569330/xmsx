
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "TreeInfo",
    nodeCode: "treeInfo"
})
export class PathHierarchyInfo82a6Entity extends Entity {

    @NgField({
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
    })
    path: string;

    @NgField({
        originalDataField: 'Layer',
        dataField: 'layer',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TreeInfo.Layer',
    })
    layer: any;

    @NgField({
        originalDataField: 'IsDetail',
        dataField: 'isDetail',
        originalDataFieldType: 'Boolean',
        initValue: false,
        path: 'TreeInfo.IsDetail',
    })
    isDetail: any;

}