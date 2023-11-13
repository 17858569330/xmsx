package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.saleorder.common;
import com.inspur.edp.bef.api.BefRtBeanUtil;;
import com.inspur.edp.bef.api.be.MgrActionUtils;
import com.inspur.edp.bef.api.lcp.IStandardLcp;;

public final class SaleOrderMgrActionUtils{
    public static void SendGoods(java.lang.String id,java.lang.String sendstate){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.SaleOrder");
        MgrActionUtils.executeCustomAction(lcp,"SendGoods",id,sendstate);
    }
}