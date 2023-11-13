package com.inspur.gs.hotwave.database.merchant.merchant.back.merchant.determinations;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;
import com.inspur.edp.bef.spi.action.determination.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.spi.action.determination.AbstractDetermination;
import com.inspur.edp.bef.api.action.determination.IDeterminationContext;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.bef.api.action.determination.IBeforeRetrieveDtmContext;

public class MerchantDtmBeforeSave2Determination extends AbstractB4SaveDetermination {
	public MerchantDtmBeforeSave2Determination(IDeterminationContext context, IChangeDetail change) {
		super(context,change);
	}
	@Override
	public  void execute() {
	}
	private IEntityData getData() {
		return (IEntityData)super.getContext().getCurrentData();
	}
}