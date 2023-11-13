package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.saleorder.entityactions;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.RootAbstractAction;
import com.inspur.edp.bef.spi.action.AbstractAction;
import com.inspur.edp.cef.entity.entity.IEntityData;
public class SaleOrderSendStateActionAction extends RootAbstractAction<String> {
    private String sendstate;
    public SaleOrderSendStateActionAction(IBENodeEntityContext beContext, String sendstate) {
        super(beContext);
        this.sendstate = sendstate;
    }
    @Override
    public  void execute() {
        //获取当前数据
        IEntityData data=this.getData();
        //给发货状态字段赋值，赋值枚举编号值即可
        data.setValue("SendState",sendstate);
    }
    private IEntityData getData() {
        return (IEntityData)getBEContext().getCurrentData();
    }
}