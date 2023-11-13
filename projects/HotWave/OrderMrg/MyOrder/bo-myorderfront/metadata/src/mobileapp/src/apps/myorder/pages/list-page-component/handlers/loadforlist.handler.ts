
import { CommandHandler, CommandHandlerMeta, CommandContext } from '@farris/mobile-devkit';
import { StateMachineService } from '@farris/mobile-command-services';
import { CreateDataService } from '@farris/mobile-command-services';

import { LoadDataService as LoadDataService1 } from '@farris/mobile-command-services';

@CommandHandlerMeta({
    commandName: 'LoadForList'
})
export class LoadForListHandler extends CommandHandler {
    constructor(
        public _LoadDataService1: LoadDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('mergeFilters', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/filters}', 
                '{COMMAND~/params/autoMerge}'
                    ];
            return this.invoke(this._LoadDataService1, 'mergeFilters', args, context);
        });

        this.addTask('loadForList', (context: CommandContext) => {
            const args = [
                '{COMMAND~/results/mergeFilters}', 
                '{COMMAND~/params/sorts}'
                    ];
            return this.invoke(this._LoadDataService1, 'loadForList', args, context);
        });

        this.addLink('mergeFilters', 'loadForList', `1==1`);
    }
}