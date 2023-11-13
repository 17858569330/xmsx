
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ValidationService as ValidationService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Cancel1'
})
export class Cancel1Handler extends CommandHandler {
    constructor(
        public _ValidationService1: ValidationService1,
        public _ListDataService1: ListDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('cancel', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ListDataService1, 'cancel', args, context);
        });

        this.addTask('refresh', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadCmdName}', 
                '{COMMAND~/params/loadCmdFrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refresh', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addTask('resetValidation', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'resetValidation', args, context);
        });

        this.addLink('cancel', 'refresh', `1==1`);
        this.addLink('refresh', 'transit', `1==1`);
        this.addLink('transit', 'resetValidation', `1==1`);
    }
}