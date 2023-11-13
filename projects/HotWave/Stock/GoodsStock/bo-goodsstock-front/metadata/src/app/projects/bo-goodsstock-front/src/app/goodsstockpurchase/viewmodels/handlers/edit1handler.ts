
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Edit1'
})
export class Edit1Handler extends CommandHandler {
    constructor(
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

    }
}