
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { BatchEditService as BatchEditService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelbatchAppendByPathBasedOnHelpSelections1'
})
export class rootviewmodelbatchAppendByPathBasedOnHelpSelections1Handler extends CommandHandler {
    constructor(
        public _BatchEditService1: BatchEditService1
    ) {
        super();
    }

    schedule() {
        this.addTask('batchAppendByPathBasedOnHelpSelections', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/frameId}', 
                '{COMMAND~/params/mapFields}'
                    ];
            return this.invoke(this._BatchEditService1, 'batchAppendByPathBasedOnHelpSelections', args, context);
        });

    }
}