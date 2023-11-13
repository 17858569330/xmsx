
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class MerChantProxy extends BefProxy {

    private apiUrl = 'api/hotwave/database/v1.0/merchantform_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    PathHierarchyCreateChildLayer(
        dataID: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatechildlayer',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                dataID: dataID,
            }
        };
        return this.invoke(url, method, options);
    }
    PathHierarchyCreateSibling(
        dataID: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatesibling',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                dataID: dataID,
            }
        };
        return this.invoke(url, method, options);
    }
    DataImportVMAction(
        dataImportContext: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataimportvmaction',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                dataImportContext: dataImportContext,
            }
        };
        return this.invoke(url, method, options);
    }
    DataExportVMAction(
        exportContext: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataexportvmaction',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                exportContext: exportContext,
            }
        };
        return this.invoke(url, method, options);
    }
}