package com.inspur.gs.hotwave.database.merchant.merchant.back.merchant.determinations;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.determination.*;


import com.inspur.edp.bef.spi.action.determination.AbstractDetermination;


import com.inspur.edp.bef.api.action.determination.IBeforeRetrieveDtmContext;

import com.inspur.edp.bef.api.lcp.IStandardLcp;
import com.inspur.edp.cdp.common.utils.spring.SpringUtil;
import com.inspur.edp.bef.spi.action.determination.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.api.action.determination.IDeterminationContext;
import com.inspur.edp.cef.entity.condition.EntityFilter;
import com.inspur.edp.cef.entity.condition.ExpressCompareType;
import com.inspur.edp.cef.entity.condition.ExpressRelationType;
import com.inspur.edp.cef.entity.condition.FilterCondition;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IValuesContainer;
import com.inspur.edp.udt.entity.IUdtData;
import io.iec.edp.caf.security.core.details.PersonalUser;
import io.iec.edp.caf.sysmanager.api.data.org.SysOrgType;
import io.iec.edp.caf.sysmanager.api.data.user.UserLimit;
import io.iec.edp.caf.sysmanager.api.data.user.UserState;
import io.iec.edp.caf.sysmanager.api.manager.user.UserManager;
import io.iec.edp.caf.sysmanager.api.data.user.User;
import io.iec.edp.caf.sysmanager.api.manager.org.SysOrgManager;
import io.iec.edp.caf.sysmanager.api.data.org.GSPSysOrg;
import java.util.*;

public class MerchantDtmBeforeSave1Determination extends AbstractB4SaveDetermination {
	public MerchantDtmBeforeSave1Determination(IDeterminationContext context, IChangeDetail change) {
		super(context,change);
	}
	@Override
	public  void execute() {

		IEntityData data = getData();
        IStandardLcp lcptree = getContext().getLcp("com.inspur.gs.hotwave.database.merchant.merchant.back.merchant");
        //获取当前节点的树形信息
        IUdtData treeInfo = (IUdtData) getData().getValue("treeInfo");
        String currentpath = (String) treeInfo.getValue("Path");//分级码
        String parentpath =currentpath.substring(0,currentpath.length()-4);
        EntityFilter filter = new EntityFilter();
        ArrayList<FilterCondition> conditions = new ArrayList<>();
        FilterCondition condition = new FilterCondition();
        condition.setFilterField("TreeInfo_Path");
        condition.setCompare(ExpressCompareType.Equal);
        condition.setValue(parentpath);
        condition.setRelation(ExpressRelationType.Empty);
        conditions.add(condition);
        filter.setFilterConditions(conditions);
        List<IEntityData> allTreeDatas = lcptree.query(filter);
        //如果查询到数据
        if (allTreeDatas.size() > 0) {
            IEntityData treeData = allTreeDatas.get(0);
            AssoInfoBase MerchantIDValuesContainer1 = (AssoInfoBase) ((IValuesContainer) data).createValue("ParentMerchantID");
            MerchantIDValuesContainer1.setValue("ParentMerchantID",treeData.getValue("ID"));
            MerchantIDValuesContainer1.setValue("ParentMerchantID_ID",treeData.getValue("ID"));
            MerchantIDValuesContainer1.setValue("ParentMerchantID_MerchantName",treeData.getValue("MerchantName"));
            data.setValue("ParentMerchantID",MerchantIDValuesContainer1);
        }
        String code = data.getID();
        SysOrgManager SysOrgManager = SpringUtil.getBean(SysOrgManager.class);
        GSPSysOrg gspSysOrg = new GSPSysOrg();
        gspSysOrg.setCode(data.getValue("MerchantCode").toString());
        gspSysOrg.setName(data.getValue("MerchantName").toString());
        gspSysOrg.setIsDetail(true);
        gspSysOrg.setId(data.getID());
        gspSysOrg.setParentId(parentpath);
        gspSysOrg.setLayer(currentpath.length()/4);
        gspSysOrg.setNodeType(SysOrgType.forValue(1));
        gspSysOrg.setPath(currentpath);
        SysOrgManager.addSysOrg(gspSysOrg);
        UserManager UserManager = SpringUtil.getBean(UserManager.class);
        User user = new User();
        user.setId(UUID.randomUUID().toString());
        user.setCode(data.getValue("MerchantCode").toString());
        user.setName(data.getValue("MerchantName").toString());
        user.setTenantId(9999);
        user.setSysOrgId(data.getID());
        user.setSysOrgCode(data.getValue("MerchantCode").toString());
        user.setSysOrgName(data.getValue("MerchantName").toString());
        data.setValue("Adminstrator",user.getId());
        UserLimit userLimit = new UserLimit();
        userLimit.setState(UserState.using);
        user.setSysInit(false);
        UserManager.addUser(user);


	}
	private IEntityData getData() {
		return (IEntityData)super.getContext().getCurrentData();
	}
}