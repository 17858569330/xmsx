
import { UIState, UIStatePropMeta } from '@farris/mobile-devkit';

/**
 * 表单UIState
 */
export class ListviewComponent31ff108UIState extends  UIState {

    @UIStatePropMeta({
        stateName: 'listaviewState'
    })
    public listaviewState: any = { refreshLoading: false, loadMoreLoading: false, loadMoreFinished: false };
    @UIStatePropMeta({
        stateName: 'searchState'
    })
    public searchState: any = { keyword: '' };
    @UIStatePropMeta({
        stateName: 'filterState'
    })
    public filterState : any = { filters: '' };
    @UIStatePropMeta({
        stateName: 'tabState'
    })
    public tabState: any = { currentTab: '' };

    @UIStatePropMeta({
        stateName: 'pageTitle'
    })
    public pageTitle: string = 'ListviewComponent31ff108';
}
