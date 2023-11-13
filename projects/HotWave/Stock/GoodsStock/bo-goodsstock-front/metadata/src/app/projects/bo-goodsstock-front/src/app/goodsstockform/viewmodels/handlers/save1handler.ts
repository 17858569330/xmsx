
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { EndEditService as EndEditService1 } from '@farris/command-services';
import { ValidationService as ValidationService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CommandService as CommandService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Save1'
})
export class Save1Handler extends CommandHandler {
    constructor(
        public _EndEditService1: EndEditService1,
        public _ValidationService1: ValidationService1,
        public _ListDataService1: ListDataService1,
        public _CommandService1: CommandService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('endEdit', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._EndEditService1, 'endEdit', args, context);
        });

        this.addTask('validateAll', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'validateAll', args, context);
        });

        this.addTask('save', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/successMsg}'
                    ];
            return this.invoke(this._ListDataService1, 'save', args, context);
        });

        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/commandName}', 
                '{COMMAND~/params/frameId}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addTask('resetValidation', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'resetValidation', args, context);
        });

        this.addLink('endEdit', 'validateAll', `1==1`);
        this.addLink('validateAll', 'save', `1==1`);
        this.addLink('save', 'execute', `1==1`);
        this.addLink('execute', 'transit', `1==1`);
        this.addLink('transit', 'resetValidation', `1==1`);
    }
}