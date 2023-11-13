
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ValidationService as ValidationService1 } from '@farris/command-services';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { TreeDataService as TreeDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Cancel1'
})
export class Cancel1Handler extends CommandHandler {
    constructor(
        public _ValidationService1: ValidationService1,
        public _EndEditService1: EndEditService1,
        public _TreeDataService1: TreeDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('endEdit', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._EndEditService1, 'endEdit', args, context);
        });

        this.addTask('cancel', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._TreeDataService1, 'cancel', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                'Cancel'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addTask('resetValidation', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'resetValidation', args, context);
        });

        this.addLink('endEdit', 'cancel', `1==1`);
        this.addLink('cancel', 'transit', `1==1`);
        this.addLink('transit', 'resetValidation', `1==1`);
    }
}