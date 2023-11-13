package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.bizactions;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.AbstractManagerAction;
import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.bef.api.lcp.LcpFactoryManagerUtils;
public class SaleOrderSendGoodsMgrAction extends AbstractManagerAction<String> {
    private String id;
    private String sendstate;
    public SaleOrderSendGoodsMgrAction(IBEManagerContext managerContext, String id, String sendstate) {
        super(managerContext);
        this.id = id;
        this.sendstate = sendstate;
    }
    @Override
    public  void execute() {
        IBusinessEntity entity=getEntity(id);
        entity.retrieve();
        //参数为BE的内部方法编号
        entity.executeBizAction("SendStateAction",sendstate);
        //参数为be的configid,在be的配置tab页可查看
        IStandardLcp lcp = LcpFactoryManagerUtils.createLcp("com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.SaleOrder");
        lcp.save();
    }
    private IBusinessEntity getEntity(String dataId) {
        return (IBusinessEntity)super.getBEManagerContext().getEntity(dataId);
    }    private IBEService getMgr() {
        return (IBEService)super.getBEManagerContext().getBEManager();
    }
}