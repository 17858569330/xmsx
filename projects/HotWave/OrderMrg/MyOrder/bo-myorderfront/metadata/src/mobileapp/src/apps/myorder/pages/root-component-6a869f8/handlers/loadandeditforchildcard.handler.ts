
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { ValidatorServices as ValidatorServices1 } from '@farris/mobile-command-services';
import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { EditDataService as EditDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadAndEditForChildCard'
})
export class LoadAndEditForChildCardHandler extends CommandHandler {
    constructor(
        public _ValidatorServices1: ValidatorServices1,
        public _StateMachineService1: StateMachineService1,
        public _EditDataService1: EditDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('editByPath', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/path}'
                    ];
            return this.invoke(this._EditDataService1, 'editByPath', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addTask('validateByValidatorFlag', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidatorServices1, 'validateByValidatorFlag', args, context);
        });

        this.addLink('editByPath', 'executeAction', `1==1`);
        this.addLink('executeAction', 'validateByValidatorFlag', `1==1`);
    }
}