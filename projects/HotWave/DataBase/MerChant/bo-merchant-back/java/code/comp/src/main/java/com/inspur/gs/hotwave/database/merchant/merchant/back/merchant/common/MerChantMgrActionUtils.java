package com.inspur.gs.hotwave.database.merchant.merchant.back.merchant.common;
import com.inspur.edp.bef.api.BefRtBeanUtil;;
import com.inspur.edp.bef.api.be.MgrActionUtils;
import com.inspur.edp.bef.api.lcp.IStandardLcp;;

public final class MerChantMgrActionUtils{
    public static com.inspur.edp.cef.entity.entity.IEntityData PathHierarchyCreateChildLayer(java.lang.String dataID){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.hotwave.database.merchant.merchant.back.MerChant");
        return (com.inspur.edp.cef.entity.entity.IEntityData)MgrActionUtils.executeCustomAction(lcp,"PathHierarchyCreateChildLayer",dataID);
    }
    public static com.inspur.edp.cef.entity.entity.IEntityData PathHierarchyCreateSibling(java.lang.String dataID){
        IStandardLcp lcp = BefRtBeanUtil.getLcpFactory().createLcp("com.inspur.gs.hotwave.database.merchant.merchant.back.MerChant");
        return (com.inspur.edp.cef.entity.entity.IEntityData)MgrActionUtils.executeCustomAction(lcp,"PathHierarchyCreateSibling",dataID);
    }
}