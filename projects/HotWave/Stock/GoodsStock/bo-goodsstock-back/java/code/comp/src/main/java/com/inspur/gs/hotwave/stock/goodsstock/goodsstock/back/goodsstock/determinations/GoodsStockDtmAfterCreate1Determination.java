package com.inspur.gs.hotwave.stock.goodsstock.goodsstock.back.goodsstock.determinations;
import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.bef.api.lcp.LcpFactoryManagerUtils;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.spi.action.determination.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.spi.action.determination.AbstractDetermination;
import com.inspur.edp.bef.api.action.determination.IDeterminationContext;
import com.inspur.edp.cef.entity.condition.*;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.bef.api.action.determination.IBeforeRetrieveDtmContext;
import com.inspur.edp.cef.entity.entity.IValuesContainer;
import io.iec.edp.caf.boot.context.CAFContext;
import io.iec.edp.caf.core.session.CafSession;

import java.util.ArrayList;
import java.util.List;

public class GoodsStockDtmAfterCreate1Determination extends AbstractDetermination {
	public GoodsStockDtmAfterCreate1Determination(IDeterminationContext context, IChangeDetail change) {
		super(context,change);
	}
	@Override
	public  void execute() {
		CafSession curSession=CAFContext.current.getCurrentSession();
		IEntityData data=this.getData();
		IValuesContainer entityDataValuesContainer = (IValuesContainer)data;

		String userId=curSession.getUserId();
		//获取管理员=当前登陆用户的商户信息
		IStandardLcp lcpmerchant = LcpFactoryManagerUtils.createLcp("com.inspur.gs.hotwave.database.merchant.merchant.back.MerChant");
		//拼装过滤条件
		EntityFilter filter= new EntityFilter();
		ArrayList<FilterCondition> list = new ArrayList<>();
		FilterCondition  filterCondition = new FilterCondition(0, "Adminstrator", ExpressCompareType.Equal, userId, 0, ExpressRelationType.Empty, ExpressValueType.Value);
		list.add(filterCondition);
		filter.addFilterConditions(list);
		//获取报销限额数据
		List<IEntityData> merchantList=lcpmerchant.query(filter);
		if(merchantList.size()>0)
		{
		  String merchantID=merchantList.get(0).getValue("ID").toString();
		  String merchantName=merchantList.get(0).getValue("MerchantName").toString();
		  //String ParentMerchantName=((IValuesContainer)merchantList.get(0).getValue("ParentMerchantID")).getValue("MerchantName").toString();

			//商品库初始时商户默认值
			IValuesContainer merchantIDValuesContainer = (IValuesContainer) entityDataValuesContainer.createValue("MerchantID");
			merchantIDValuesContainer.setValue("MerchantID",merchantID);
			merchantIDValuesContainer.setValue("MerchantID_MerchantName",merchantName);
			//merchantIDValuesContainer.setValue("MerchantID_ParentMerchantID_MerchantName",ParentMerchantName);
			data.setValue("MerchantID",merchantIDValuesContainer);
		}



	}
	private IEntityData getData() {
		return (IEntityData)super.getContext().getCurrentData();
	}
}