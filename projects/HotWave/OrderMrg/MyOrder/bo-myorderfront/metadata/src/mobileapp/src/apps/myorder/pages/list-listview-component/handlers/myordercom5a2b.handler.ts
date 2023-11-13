
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { MyOrderFrmMyOrderWebService as MyOrderFrmMyOrderWebService1 } from '../../../services/myorder_frm_myorderweb';
import { LoadDataService as LoadDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'MyOrderCom5a2b'
})
export class MyOrderCom5a2bHandler extends CommandHandler {
    constructor(
        public _MyOrderFrmMyOrderWebService1: MyOrderFrmMyOrderWebService1,
        public _LoadDataService1: LoadDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('sendGoods', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/sendGoods_id}', 
                '{COMMAND~/params/sendGoods_sendstate}'
                    ];
            return this.invoke(this._MyOrderFrmMyOrderWebService1, 'sendGoods', args, context);
        });

        this.addTask('loadForList', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadForList_过滤条件}', 
                '{COMMAND~/params/loadForList_排序条件}'
                    ];
            return this.invoke(this._LoadDataService1, 'loadForList', args, context);
        });

        this.addLink('sendGoods', 'loadForList', `1==1`);
    }
}