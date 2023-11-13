
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { DataImportExportService as DataImportExportService1 } from '@gsp-dip/data-imp-exp';

@Injectable()
@NgCommandHandler({
    commandName: 'dataExport1'
})
export class dataExport1Handler extends CommandHandler {
    constructor(
        public _DataImportExportService1: DataImportExportService1
    ) {
        super();
    }

    schedule() {
        this.addTask('CommonDataExport', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/type}', 
                '{COMMAND~/params/ruleID}', 
                '{COMMAND~/params/option}'
                    ];
            return this.invoke(this._DataImportExportService1, 'CommonDataExport', args, context);
        });

    }
}