import { Injectable } from '@angular/core';
import { FrameContext } from '@farris/devkit';
import { BefRepository, ResponseInfo } from '@farris/bef';
import { BeActionService, FormMessageService } from '@farris/command-services';
import { tap } from 'rxjs/operators';
@Injectable()
export class SaleOrderListFrmControllerService {
  constructor(
    private frameContext: FrameContext,
    private beActionService: BeActionService,
    private messageService: FormMessageService
  ) { }
  /**
   * sendGoods
   * @param id 单据ID
   * @param sendstate 单据状态
   * @remarks 
   * @returns 
   */
  sendGoods(id, sendstate): any {
    const repository = this.frameContext.repository as BefRepository<any>;
    const requestInfo = repository.restService.buildRequestInfo();
    const actionUri = 'sendgoods';
    //此处actionUri为报销单列表Eapi中发货操作URI尾部字段
    const body = {
      id: id,
      sendstate: sendstate,
      requestInfo: requestInfo
    }
    const action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
    return action$.pipe(
      tap((responseInfo: ResponseInfo) => {
        this.messageService.info("发货成功!");
      })
    )
  }
}