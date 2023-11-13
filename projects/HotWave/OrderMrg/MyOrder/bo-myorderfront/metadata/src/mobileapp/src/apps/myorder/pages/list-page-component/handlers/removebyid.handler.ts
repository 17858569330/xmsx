
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { RemoveDataService as RemoveDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'RemoveById'
})
export class RemoveByIdHandler extends CommandHandler {
    constructor(
        public _RemoveDataService1: RemoveDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('removeById', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._RemoveDataService1, 'removeById', args, context);
        });

    }
}