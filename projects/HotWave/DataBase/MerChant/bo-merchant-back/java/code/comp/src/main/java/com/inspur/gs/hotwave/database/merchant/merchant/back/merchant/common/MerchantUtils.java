package com.inspur.gs.hotwave.database.merchant.merchant.back.merchant.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.common.commonudt.pathhierarchyinfo.entity.IPathHierarchyInfo;
import java.util.Date;

public final class MerchantUtils{
    public static String getID(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"ID");
    }
    public static void setID(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"ID",propertyValue);
    }
    public static Date getVersion(IEntityData data){
        return (Date)EntityDataUtils.getValue(data,"Version");
    }
    public static void setVersion(IEntityData data,Date propertyValue){
        EntityDataUtils.setValue(data,"Version",propertyValue);
    }
    public static String getMerchantName(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"MerchantName");
    }
    public static void setMerchantName(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"MerchantName",propertyValue);
    }
    public static String getMerchantCode(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"MerchantCode");
    }
    public static void setMerchantCode(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"MerchantCode",propertyValue);
    }
    public static String getCompanyType(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"CompanyType");
    }
    public static void setCompanyType(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"CompanyType",propertyValue);
    }
    public static String getMerchantType(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"MerchantType");
    }
    public static void setMerchantType(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"MerchantType",propertyValue);
    }
    public static String getRealName(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"RealName");
    }
    public static void setRealName(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"RealName",propertyValue);
    }
    public static String getFullName(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"FullName");
    }
    public static void setFullName(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"FullName",propertyValue);
    }
    public static String getBusinessLicense(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"BusinessLicense");
    }
    public static void setBusinessLicense(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"BusinessLicense",propertyValue);
    }
    public static String getAddress(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Address");
    }
    public static void setAddress(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Address",propertyValue);
    }
    public static String getEmail(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Email");
    }
    public static void setEmail(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Email",propertyValue);
    }
    public static String getTelephone(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Telephone");
    }
    public static void setTelephone(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Telephone",propertyValue);
    }
    public static String getAdminstrator(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Adminstrator");
    }
    public static void setAdminstrator(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Adminstrator",propertyValue);
    }
    public static IPathHierarchyInfo getTreeInfo(IEntityData data){
        return (IPathHierarchyInfo)EntityDataUtils.getValue(data,"TreeInfo");
    }
    public static void setTreeInfo(IEntityData data,IPathHierarchyInfo propertyValue){
        EntityDataUtils.setValue(data,"TreeInfo",propertyValue);
    }
    public static AssoInfoBase getParentMerchantID(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"ParentMerchantID");
    }
    public static void setParentMerchantID(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"ParentMerchantID",propertyValue);
    }
    public static String getRemark(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Remark");
    }
    public static void setRemark(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Remark",propertyValue);
    }
}