
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { ValidatorServices as ValidatorServices1 } from '@farris/mobile-command-services';
import { StateMachineService as StateMachineService1 } from '@farris/mobile-command-services';
import { SaveDataService as SaveDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'Save'
})
export class SaveHandler extends CommandHandler {
    constructor(
        public _ValidatorServices1: ValidatorServices1,
        public _StateMachineService1: StateMachineService1,
        public _SaveDataService1: SaveDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('handleValidateFields', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._ValidatorServices1, 'handleValidateFields', args, context);
        });

        this.addTask('save', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._SaveDataService1, 'save', args, context);
        });

        this.addTask('executeAction', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'executeAction', args, context);
        });

        this.addLink('handleValidateFields', 'save', `1==1`);
        this.addLink('save', 'executeAction', `1==1`);
    }
}