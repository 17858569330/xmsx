
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { CommandService as CommandService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadCardPage'
})
export class LoadCardPageHandler extends CommandHandler {
    constructor(
        public _CommandService1: CommandService1
    ) {
        super();
    }

    schedule() {
        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/commandName}', 
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

    }
}