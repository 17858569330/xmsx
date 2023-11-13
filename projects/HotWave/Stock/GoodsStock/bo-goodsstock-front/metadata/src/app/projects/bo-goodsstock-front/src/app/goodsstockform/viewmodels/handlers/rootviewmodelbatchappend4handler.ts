
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { BatchEditService as BatchEditService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelbatchAppend4'
})
export class rootviewmodelbatchAppend4Handler extends CommandHandler {
    constructor(
        public _BatchEditService1: BatchEditService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('batchAppend', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/frameId}', 
                '{COMMAND~/params/mapFields}'
                    ];
            return this.invoke(this._BatchEditService1, 'batchAppend', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addLink('batchAppend', 'transit', `1==1`);
    }
}