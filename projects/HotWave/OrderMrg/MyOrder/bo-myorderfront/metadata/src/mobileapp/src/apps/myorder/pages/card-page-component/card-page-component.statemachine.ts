
import { StateMachine, State, StatePropMeta, RenderState, RenderStatePropMeta, Action, ActionMethodMeta } from '@farris/mobile-devkit';

export class  CardPageComponentStateMachine extends StateMachine {

    @StatePropMeta({
        initialState: true
    })
    initState: State;

    @StatePropMeta()
    addState: State;

    @StatePropMeta()
    editState: State;

    @StatePropMeta()
    viewState: State;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'initState'
    })
    canRemove: RenderState;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'addState' || context.state === 'editState'
    })
    canInput: RenderState;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'initState' || context.state === 'viewState'
    })
    canEdit: RenderState;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'initState' || context.state === 'viewState'
    })
    canAdd: RenderState;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'viewState'
    })
    showStaticText: RenderState;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'addState' || context.state === 'editState'
    })
    canSave: RenderState;

    @RenderStatePropMeta({
        render: (context: any) => context.state === 'addState' || context.state === 'editState'
    })
    canCancel: RenderState;

    @ActionMethodMeta({
        transitTo: 'addState'
    })
    addAction: Action;

    @ActionMethodMeta({
        transitTo: 'initState'
    })
    saveAction: Action;

    @ActionMethodMeta({
        transitTo: 'editState'
    })
    editAction: Action;

    @ActionMethodMeta({
        transitTo: 'viewState'
    })
    viewAction: Action;

    @ActionMethodMeta({
        transitTo: 'initState'
    })
    cancelAction: Action;

}