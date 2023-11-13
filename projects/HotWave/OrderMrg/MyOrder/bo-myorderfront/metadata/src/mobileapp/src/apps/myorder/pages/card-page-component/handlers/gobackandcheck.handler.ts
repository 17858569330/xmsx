
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { RouterService as RouterService1 } from '@farris/mobile-command-services';
import { CheckDataService as CheckDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'GoBackAndCheck'
})
export class GoBackAndCheckHandler extends CommandHandler {
    constructor(
        public _RouterService1: RouterService1,
        public _CheckDataService1: CheckDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('checkChangesBeforeLeave', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CheckDataService1, 'checkChangesBeforeLeave', args, context);
        });

        this.addTask('goBack', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/params}'
                    ];
            return this.invoke(this._RouterService1, 'goBack', args, context);
        });

        this.addLink('checkChangesBeforeLeave', 'goBack', `1==1`);
    }
}