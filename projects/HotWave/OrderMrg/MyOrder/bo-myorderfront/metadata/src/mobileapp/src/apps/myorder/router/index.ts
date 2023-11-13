
import ListPageComponentComponent from '../pages/list-page-component/list-page-component.component.vue';
import ListListviewComponentComponent from '../pages/list-listview-component/list-listview-component.component.vue';
import CardPageComponentComponent from '../pages/card-page-component/card-page-component.component.vue';
import CardFormComponentComponent from '../pages/card-form-component/card-form-component.component.vue';
import ListviewComponent31ff108Component from '../pages/listview-component-31ff108/listview-component-31ff108.component.vue';
import RootComponent6a869f8Component from '../pages/root-component-6a869f8/root-component-6a869f8.component.vue';
import CardComponentAb86420Component from '../pages/card-component-ab86420/card-component-ab86420.component.vue';

const routerConfig =
    [
        {
            path: '',
            component: ListPageComponentComponent
        },
        {
            path: 'list-page-component',
            component: ListPageComponentComponent,
            meta: {}
        },
        {
            path: 'list-listview-component',
            component: ListListviewComponentComponent,
            meta: {}
        },
        {
            path: 'card-page-component',
            component: CardPageComponentComponent,
            meta: {}
        },
        {
            path: 'card-form-component',
            component: CardFormComponentComponent,
            meta: {}
        },
        {
            path: 'listview-component-31ff108',
            component: ListviewComponent31ff108Component,
            meta: {}
        },
        {
            path: 'root-component-6a869f8',
            component: RootComponent6a869f8Component,
            meta: {}
        },
        {
            path: 'card-component-ab86420',
            component: CardComponentAb86420Component,
            meta: {}
        }
    ];

export { routerConfig };
