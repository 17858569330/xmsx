package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.saleorder.determinations;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.spi.action.determination.AbstractDetermination;
import com.inspur.edp.bef.api.action.determination.IDeterminationContext;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IValuesContainer;
import io.iec.edp.caf.boot.context.CAFContext;
import io.iec.edp.caf.core.session.CafSession;
public class SaleOrderSaleOrderAfterCreateDetermination extends AbstractDetermination {
    public SaleOrderSaleOrderAfterCreateDetermination(IDeterminationContext context, IChangeDetail change) {
        super(context,change);
    }
    @Override
    public  void execute() {
        CafSession curSession = CAFContext.current.getCurrentSession();
        IEntityData data = this.getData();
        AssoInfoBase orderPerson = (AssoInfoBase) ((IValuesContainer) data).createValue("OrderPerson");
        orderPerson.setValue("OrderPerson", curSession.getUserId());
        orderPerson.setValue("OrderPerson_code", curSession.getUserCode());
        orderPerson.setValue("OrderPerson_name", curSession.getUserName());
        data.setValue("OrderPerson",orderPerson);
        AssoInfoBase merchant = (AssoInfoBase) ((IValuesContainer) data).createValue("Merchant");
        merchant.setValue("Merchant", curSession.getSysOrgId());
        merchant.setValue("Merchant_MerchantName", curSession.getSysOrgName());
        merchant.setValue("Merchant_MerchantCode", curSession.getSysOrgCode());
        data.setValue("Merchant",merchant);
    }
    private IEntityData getData() {
        return (IEntityData)super.getContext().getCurrentData();
    }
}