
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { PaginationService as PaginationService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'LoadCard1'
})
export class LoadCard1Handler extends CommandHandler {
    constructor(
        public _PaginationService1: PaginationService1,
        public _CardDataService1: CardDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('resetChildrenPagination', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._PaginationService1, 'resetChildrenPagination', args, context);
        });

        this.addTask('update', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CardDataService1, 'update', args, context);
        });

        this.addLink('resetChildrenPagination', 'update', `1==1`);
    }
}