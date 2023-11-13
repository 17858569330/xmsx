
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { BatchEditService as BatchEditService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelopenBatchEditDialog1'
})
export class rootviewmodelopenBatchEditDialog1Handler extends CommandHandler {
    constructor(
        public _BatchEditService1: BatchEditService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('openBatchEditDialog', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/frameId}'
                    ];
            return this.invoke(this._BatchEditService1, 'openBatchEditDialog', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addLink('openBatchEditDialog', 'transit', `1==1`);
    }
}