
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { CommandService as CommandService1 } from '@farris/mobile-command-services';
import { ValidatorServices as ValidatorServices1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadPageForChildCard'
})
export class LoadPageForChildCardHandler extends CommandHandler {
    constructor(
        public _CommandService1: CommandService1,
        public _ValidatorServices1: ValidatorServices1
    ) {
        super();
    }

    schedule() {
        this.addTask('resetFieldsValidate', (context: CommandContext) => {
            const args = [
                '', 
                ''
                    ];
            return this.invoke(this._ValidatorServices1, 'resetFieldsValidate', args, context);
        });

        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/commandName}', 
                '{COMMAND~/params/viewModelId}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

        this.addLink('resetFieldsValidate', 'execute', `1==1`);
    }
}