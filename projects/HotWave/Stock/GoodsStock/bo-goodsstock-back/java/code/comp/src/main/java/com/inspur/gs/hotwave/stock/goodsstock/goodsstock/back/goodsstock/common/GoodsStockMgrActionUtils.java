package com.inspur.gs.hotwave.stock.goodsstock.goodsstock.back.goodsstock.common;
import com.inspur.edp.bef.api.BefRtBeanUtil;;
import com.inspur.edp.bef.api.be.MgrActionUtils;
import com.inspur.edp.bef.api.lcp.IStandardLcp;;

public final class GoodsStockMgrActionUtils{
    public static void StockWriteBack(java.lang.String dataid,java.lang.String spjl,java.lang.String beid){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.hotwave.stock.goodsstock.goodsstock.back.GoodsStock");
        MgrActionUtils.executeCustomAction(lcp,"StockWriteBack",dataid,spjl,beid);
    }
}