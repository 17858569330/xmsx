
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { RouterService as RouterService1 } from '@farris/mobile-command-services';
import { CheckDataService as CheckDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'GoBackForChildCard'
})
export class GoBackForChildCardHandler extends CommandHandler {
    constructor(
        public _RouterService1: RouterService1,
        public _CheckDataService1: CheckDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('checkChangesBeforeLeaveAddOrEditChild', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/childTablePath}'
                    ];
            return this.invoke(this._CheckDataService1, 'checkChangesBeforeLeaveAddOrEditChild', args, context);
        });

        this.addTask('goBack', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/backParams}'
                    ];
            return this.invoke(this._RouterService1, 'goBack', args, context);
        });

        this.addLink('checkChangesBeforeLeaveAddOrEditChild', 'goBack', `1==1`);
    }
}