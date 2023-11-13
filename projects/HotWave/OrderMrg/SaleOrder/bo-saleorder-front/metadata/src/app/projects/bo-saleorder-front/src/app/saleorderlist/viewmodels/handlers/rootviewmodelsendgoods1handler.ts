
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';
import { SaleOrderListFrmControllerService as SaleOrderListFrmControllerService1 } from '../../services/saleorderlist_frm_controller';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelsendGoods1'
})
export class rootviewmodelsendGoods1Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1,
        public _SaleOrderListFrmControllerService1: SaleOrderListFrmControllerService1
    ) {
        super();
    }

    schedule() {
        this.addTask('sendGoods', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}', 
                '{COMMAND~/params/sendstate}'
                    ];
            return this.invoke(this._SaleOrderListFrmControllerService1, 'sendGoods', args, context);
        });

        this.addTask('refresh', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadCmdName}', 
                '{COMMAND~/params/loadCmdFrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refresh', args, context);
        });

        this.addLink('sendGoods', 'refresh', `1==1`);
    }
}