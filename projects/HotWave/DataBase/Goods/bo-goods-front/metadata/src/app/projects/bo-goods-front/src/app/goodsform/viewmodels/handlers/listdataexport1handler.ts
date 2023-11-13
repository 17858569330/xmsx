
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { DataImportExportService as DataImportExportService1 } from '@gsp-dip/data-imp-exp';

@Injectable()
@NgCommandHandler({
    commandName: 'listDataExport1'
})
export class listDataExport1Handler extends CommandHandler {
    constructor(
        public _DataImportExportService1: DataImportExportService1
    ) {
        super();
    }

    schedule() {
        this.addTask('ListFormExport', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/ruleID}', 
                '{COMMAND~/params/option}'
                    ];
            return this.invoke(this._DataImportExportService1, 'ListFormExport', args, context);
        });

    }
}