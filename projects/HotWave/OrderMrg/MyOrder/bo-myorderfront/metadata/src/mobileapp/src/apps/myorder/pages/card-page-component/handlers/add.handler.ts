
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { CreateDataService as CreateDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'Add'
})
export class AddHandler extends CommandHandler {
    constructor(
        public _StateMachineService1: StateMachineService1,
        public _CreateDataService1: CreateDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('create', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CreateDataService1, 'create', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addLink('create', 'executeAction', `1==1`);
    }
}