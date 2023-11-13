package com.inspur.gs.hotwave.stock.goodsstock.goodsstock.back.bizactions;

import com.inspur.edp.bef.api.lcp.ILcpFactory;
import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.bef.api.lcp.LcpFactoryManagerUtils;
import com.inspur.edp.bef.api.services.IBefSessionManager;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.AbstractManagerAction;
import com.inspur.edp.cef.entity.condition.*;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IEntityDataCollection;
import com.inspur.edp.cef.entity.entity.IValuesContainer;
import io.iec.edp.caf.commons.utils.SpringBeanUtils;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
public class GoodsStockStockWriteBackMgrAction extends AbstractManagerAction<String> {
    private String dataid;
    private String spjl;
    private String beid;
    public GoodsStockStockWriteBackMgrAction(IBEManagerContext managerContext, String dataid, String spjl,String beid) {
        super(managerContext);
        this.dataid = dataid;
        this.spjl = spjl;
        this.beid = beid;
    }
    @Override
    public  void execute() {
        //创建session
        SpringBeanUtils.getBean(IBefSessionManager.class).createSession();
        try {
            ILcpFactory iLcpFactory = SpringBeanUtils.getBean(ILcpFactory.class);
            //通过beid获取lcp
            String stockbeid="b3a372d3-4d4e-48a0-988d-6a7c0ddfd561";//商品库业务实体id
            String purchasebeid ="c15ad6b2-389e-4426-89b6-eca59320e097";//补货采购单业务实体id
            IStandardLcp stocklcp = iLcpFactory.createLcpByBEId(stockbeid);
            IStandardLcp purchaselcp = iLcpFactory.createLcpByBEId(purchasebeid);
            purchaselcp.retrieve(dataid).getData();
            IEntityData  purchaseData=purchaselcp.retrieve(dataid).getData();
            String merchantId=((IValuesContainer)purchaseData.getValue("Merchant")).getValue("Merchant").toString();
            IEntityDataCollection purchaseChildData =purchaseData.getChilds().get("PurchaseDetail");
            for (IEntityData item : purchaseChildData) {
                String goodsId=((IValuesContainer)item.getValue("Goods")).getValue("Goods").toString();
                BigDecimal purchaseNum=new BigDecimal(item.getValue("Quality").toString());
                EntityFilter filer=getFilter(merchantId,goodsId);
                List<IEntityData> stockList= stocklcp.query(filer);
                if(stockList.size()>0)
                {
                    String dataid= stockList.get(0).getID();
                    BigDecimal stockNum=new BigDecimal(stockList.get(0).getValue("StockNum").toString());
                    BigDecimal newstockNum=stockNum.add(purchaseNum);
                    ModifyChangeDetail change = new ModifyChangeDetail(dataid);
                    change.getPropertyChanges().put("StockNum",newstockNum);
                    stocklcp.modify(change);
                }
            }
            stocklcp.save();
        } finally {
            SpringBeanUtils.getBean(IBefSessionManager.class).closeCurrentSession();
        }
    }
    private EntityFilter getFilter(String merchantId,String goodsId){
        ArrayList<FilterCondition>  filterConditions = new ArrayList<>();
        EntityFilter filter = new EntityFilter();
        FilterCondition condition1 = new FilterCondition(0,"MerchantID", ExpressCompareType.Equal,merchantId,0, ExpressRelationType.And, ExpressValueType.Value);
        FilterCondition condition2 = new FilterCondition(0,"GoodsID", ExpressCompareType.Equal,goodsId,0, ExpressRelationType.Empty, ExpressValueType.Value);
        filterConditions.add(condition1);
        filterConditions.add(condition2);
        filter.setFilterConditions(filterConditions);
        return  filter;
    }
    private IBusinessEntity getEntity(String dataId) {
        return (IBusinessEntity)super.getBEManagerContext().getEntity(dataId);
    }    private IBEService getMgr() {
        return (IBEService)super.getBEManagerContext().getBEManager();
    }
}




/*

import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.be.*;
import com.inspur.edp.bef.api.action.VoidActionResult;
import com.inspur.edp.bef.spi.action.AbstractManagerAction;

public class GoodsStockStockWriteBackMgrAction extends AbstractManagerAction<String> {
	private String dataid;
	private String spjl;
	private String beid;
	public GoodsStockStockWriteBackMgrAction(IBEManagerContext managerContext, String dataid, String spjl, String beid) {
		super(managerContext);
		this.dataid = dataid;
		this.spjl = spjl;
		this.beid = beid;
	}
	@Override
	public  void execute() {
	}
	private IBusinessEntity getEntity(String dataId) {
		return (IBusinessEntity)super.getBEManagerContext().getEntity(dataId);
	}	private IBEService getMgr() {
		return (IBEService)super.getBEManagerContext().getBEManager();
	}
}

*/