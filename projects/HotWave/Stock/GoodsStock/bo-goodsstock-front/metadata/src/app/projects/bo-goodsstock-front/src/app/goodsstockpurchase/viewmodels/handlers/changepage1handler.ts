
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { GridMiddlewareService as GridMiddlewareService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CommandService as CommandService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'ChangePage1'
})
export class ChangePage1Handler extends CommandHandler {
    constructor(
        public _GridMiddlewareService1: GridMiddlewareService1,
        public _ListDataService1: ListDataService1,
        public _CommandService1: CommandService1
    ) {
        super();
    }

    schedule() {
        this.addTask('onPageChanging', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._GridMiddlewareService1, 'onPageChanging', args, context);
        });

        this.addTask('revert', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ListDataService1, 'revert', args, context);
        });

        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadCommandName}', 
                '{COMMAND~/params/loadCommandFrameId}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

        this.addLink('onPageChanging', 'revert', `1==1`);
        this.addLink('revert', 'execute', `1==1`);
    }
}