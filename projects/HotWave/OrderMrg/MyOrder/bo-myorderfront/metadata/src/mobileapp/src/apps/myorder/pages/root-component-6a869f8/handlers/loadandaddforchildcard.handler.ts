
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { CreateDataService as CreateDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadAndAddForChildCard'
})
export class LoadAndAddForChildCardHandler extends CommandHandler {
    constructor(
        public _StateMachineService1: StateMachineService1,
        public _CreateDataService1: CreateDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('createByPath', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/path}'
                    ];
            return this.invoke(this._CreateDataService1, 'createByPath', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addLink('createByPath', 'executeAction', `1==1`);
    }
}