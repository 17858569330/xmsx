
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { RouterService as RouterService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'OpenCardAndAdd'
})
export class OpenCardAndAddHandler extends CommandHandler {
    constructor(
        public _RouterService1: RouterService1
    ) {
        super();
    }

    schedule() {
        this.addTask('navigate', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/path}', 
                '{COMMAND~/params/queryParams}', 
                '{COMMAND~/params/backParams}', 
                '{COMMAND~/params/backPath}'
                    ];
            return this.invoke(this._RouterService1, 'navigate', args, context);
        });

    }
}