
import { HttpClient } from '@farris/mobile-devkit';
import { BefProxy} from '@farris/mobile-bef';
import { switchMap, map, catchError } from 'rxjs/operators';

export class SaleOrderProxy extends BefProxy {

    public baseUrl = '/api/hotwave/ordermrg/v1.0/myorder_mfrm';

    constructor(
        httpClient: HttpClient) {
        super(httpClient);
    }
}