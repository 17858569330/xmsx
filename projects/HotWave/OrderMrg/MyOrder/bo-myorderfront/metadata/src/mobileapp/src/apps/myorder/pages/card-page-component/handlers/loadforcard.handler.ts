
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { CommandService as CommandService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadForCard'
})
export class LoadForCardHandler extends CommandHandler {
    constructor(
        public _CommandService1: CommandService1
    ) {
        super();
    }

    schedule() {
        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}', 
                ''
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

    }
}