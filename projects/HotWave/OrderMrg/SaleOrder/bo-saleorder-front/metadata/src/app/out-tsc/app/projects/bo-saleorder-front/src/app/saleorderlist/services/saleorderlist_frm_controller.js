import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FrameContext } from '@farris/devkit';
import { BeActionService, FormMessageService } from '@farris/command-services';
import { tap } from 'rxjs/operators';
var SaleOrderListFrmControllerService = /** @class */ (function () {
    function SaleOrderListFrmControllerService(frameContext, beActionService, messageService) {
        this.frameContext = frameContext;
        this.beActionService = beActionService;
        this.messageService = messageService;
    }
    /**
     * sendGoods
     * @param id 单据ID
     * @param sendstate 单据状态
     * @remarks
     * @returns
     */
    SaleOrderListFrmControllerService.prototype.sendGoods = function (id, sendstate) {
        var _this = this;
        var repository = this.frameContext.repository;
        var requestInfo = repository.restService.buildRequestInfo();
        var actionUri = 'sendgoods';
        //此处actionUri为报销单列表Eapi中发货操作URI尾部字段
        var body = {
            id: id,
            sendstate: sendstate,
            requestInfo: requestInfo
        };
        var action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
        return action$.pipe(tap(function (responseInfo) {
            _this.messageService.info("发货成功!");
        }));
    };
    SaleOrderListFrmControllerService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [FrameContext,
            BeActionService,
            FormMessageService])
    ], SaleOrderListFrmControllerService);
    return SaleOrderListFrmControllerService;
}());
export { SaleOrderListFrmControllerService };
