
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { CancelDataService as CancelDataService1 } from '@farris/mobile-command-services';
import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { UpdateDataService as UpdateDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'Cancel'
})
export class CancelHandler extends CommandHandler {
    constructor(
        public _CancelDataService1: CancelDataService1,
        public _StateMachineService1: StateMachineService1,
        public _UpdateDataService1: UpdateDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('cancel', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CancelDataService1, 'cancel', args, context);
        });

        this.addTask('update', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._UpdateDataService1, 'update', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addLink('cancel', 'update', `1==1`);
        this.addLink('update', 'executeAction', `1==1`);
    }
}