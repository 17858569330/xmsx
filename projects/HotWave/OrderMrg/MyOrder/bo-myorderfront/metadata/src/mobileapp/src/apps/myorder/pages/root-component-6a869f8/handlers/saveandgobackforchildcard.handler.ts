
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { ValidatorServices as ValidatorServices1 } from '@farris/mobile-command-services';
import { RouterService as RouterService1 } from '@farris/mobile-command-services';
import { SaveDataService as SaveDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'SaveAndGoBackForChildCard'
})
export class SaveAndGoBackForChildCardHandler extends CommandHandler {
    constructor(
        public _ValidatorServices1: ValidatorServices1,
        public _RouterService1: RouterService1,
        public _SaveDataService1: SaveDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('handleValidateFields', (context: CommandContext) => {
            const args = [
                ''
                    ];
            return this.invoke(this._ValidatorServices1, 'handleValidateFields', args, context);
        });

        this.addTask('saveByPathWithoutNotify', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._SaveDataService1, 'saveByPathWithoutNotify', args, context);
        });

        this.addTask('goBack', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/backParams}'
                    ];
            return this.invoke(this._RouterService1, 'goBack', args, context);
        });

        this.addLink('handleValidateFields', 'saveByPathWithoutNotify', `1==1`);
        this.addLink('saveByPathWithoutNotify', 'goBack', `1==1`);
    }
}