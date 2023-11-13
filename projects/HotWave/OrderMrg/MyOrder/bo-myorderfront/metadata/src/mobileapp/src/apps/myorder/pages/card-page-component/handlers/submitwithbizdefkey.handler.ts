
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { CommandService as CommandService1 } from '@farris/mobile-command-services';
import { ApproveService as ApproveService1 } from '@farris/mobile-command-services';
import { UpdateDataService as UpdateDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'SubmitWithBizDefKey'
})
export class SubmitWithBizDefKeyHandler extends CommandHandler {
    constructor(
        public _CommandService1: CommandService1,
        public _ApproveService1: ApproveService1,
        public _UpdateDataService1: UpdateDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('submitWithBizDefKey', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/dataId}', 
                '{COMMAND~/params/bizDefKey}'
                    ];
            return this.invoke(this._ApproveService1, 'submitWithBizDefKey', args, context);
        });

        this.addTask('update', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._UpdateDataService1, 'update', args, context);
        });

        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/commandName}', 
                '{COMMAND~/params/viewModelId}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

        this.addLink('submitWithBizDefKey', 'update', `1==1`);
        this.addLink('update', 'execute', `1==1`);
    }
}