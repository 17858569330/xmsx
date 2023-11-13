
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { EditDataService as EditDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'Edit'
})
export class EditHandler extends CommandHandler {
    constructor(
        public _StateMachineService1: StateMachineService1,
        public _EditDataService1: EditDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('edit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._EditDataService1, 'edit', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addLink('edit', 'executeAction', `1==1`);
    }
}