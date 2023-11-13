
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class SaleOrderProxy extends BefProxy {

    private apiUrl = 'api/hotwave/ordermrg/v1.0/saleorderlist_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    SendGoods(
        id: any,
        sendstate: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/sendgoods',{
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
                id: id,
                sendstate: sendstate,
            }
        };
        return this.invoke(url, method, options);
    }
}