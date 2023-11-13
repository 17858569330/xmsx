
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { TreeDataService as TreeDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'LoadTree1'
})
export class LoadTree1Handler extends CommandHandler {
    constructor(
        public _NavigationMiddlewareService1: NavigationMiddlewareService1,
        public _TreeDataService1: TreeDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('onClosing', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._NavigationMiddlewareService1, 'onClosing', args, context);
        });

        this.addTask('load', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/filter}', 
                '{COMMAND~/params/sort}'
                    ];
            return this.invoke(this._TreeDataService1, 'load', args, context);
        });

        this.addLink('onClosing', 'load', `1==1`);
    }
}