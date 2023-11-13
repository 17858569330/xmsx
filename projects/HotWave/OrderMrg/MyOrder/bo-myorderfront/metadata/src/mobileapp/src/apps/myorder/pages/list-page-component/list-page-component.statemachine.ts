
import { StateMachine, State, StatePropMeta, RenderState, RenderStatePropMeta, Action, ActionMethodMeta } from '@farris/mobile-devkit';

export class  ListPageComponentStateMachine extends StateMachine {

    @StatePropMeta({
        initialState: true
    })
    initState: State;

}