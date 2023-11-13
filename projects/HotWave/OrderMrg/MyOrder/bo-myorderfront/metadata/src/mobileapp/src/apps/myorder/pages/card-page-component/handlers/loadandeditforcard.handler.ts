
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { LoadDataService as LoadDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadAndEditForCard'
})
export class LoadAndEditForCardHandler extends CommandHandler {
    constructor(
        public _StateMachineService1: StateMachineService1,
        public _LoadDataService1: LoadDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('loadForCard', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._LoadDataService1, 'loadForCard', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addLink('loadForCard', 'executeAction', `1==1`);
    }
}