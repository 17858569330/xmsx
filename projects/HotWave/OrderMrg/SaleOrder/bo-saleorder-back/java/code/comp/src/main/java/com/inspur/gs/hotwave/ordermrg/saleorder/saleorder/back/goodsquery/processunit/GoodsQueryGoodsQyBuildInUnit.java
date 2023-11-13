package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.goodsquery.processunit;

import com.inspur.edp.qdp.api.querymanager.IQOManager;
import com.inspur.edp.qdp.api.attributes.ProcessUnitConfigAttribute;
import com.inspur.edp.qdp.spi.processunit.QryAllDataSrcProcessUnit;
import com.inspur.edp.qdp.api.action.determination.attributes.BeforeExecutePUDtmsAttribute;
import com.inspur.edp.qdp.api.action.determination.attributes.AfterExecutePUDtmsAttribute;
import com.inspur.edp.qdp.core.util.ProcessUnitExpressionEvaluator;

@ProcessUnitConfigAttribute(code="GoodsQy",id="3693fa1c-c181-4bed-9bde-4b33ecbef82f")
public class GoodsQueryGoodsQyBuildInUnit extends QryAllDataSrcProcessUnit
{
    public GoodsQueryGoodsQyBuildInUnit(IQOManager manager)
    {
        super(manager, GoodsQueryGoodsQyBuildInUnit.class);
    }

    @Override
    public boolean canExecute() {
        return true;
    }

}
