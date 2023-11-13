package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.saleorder.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import com.inspur.edp.cef.entity.entity.IEntityDataCollection;
import java.math.BigDecimal;
import java.util.Date;

public final class SaleOrderUtils{
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
    public static String getOrderCode(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"OrderCode");
    }
    public static void setOrderCode(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"OrderCode",propertyValue);
    }
    public static AssoInfoBase getMerchant(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"Merchant");
    }
    public static void setMerchant(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"Merchant",propertyValue);
    }
    public static String getOrderTime(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"OrderTime");
    }
    public static void setOrderTime(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"OrderTime",propertyValue);
    }
    public static String getPayMethod(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"PayMethod");
    }
    public static void setPayMethod(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"PayMethod",propertyValue);
    }
    public static AssoInfoBase getOrderPerson(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"OrderPerson");
    }
    public static void setOrderPerson(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"OrderPerson",propertyValue);
    }
    public static String getTelephone(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Telephone");
    }
    public static void setTelephone(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Telephone",propertyValue);
    }
    public static String getSendState(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"SendState");
    }
    public static void setSendState(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"SendState",propertyValue);
    }
    public static String getRemark(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Remark");
    }
    public static void setRemark(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Remark",propertyValue);
    }
    public static BigDecimal getTotalPrice(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"TotalPrice");
    }
    public static void setTotalPrice(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"TotalPrice",propertyValue);
    }
    public static BigDecimal getTotalDiscounts(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"TotalDiscounts");
    }
    public static void setTotalDiscounts(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"TotalDiscounts",propertyValue);
    }
    public static BigDecimal getActualPay(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"ActualPay");
    }
    public static void setActualPay(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"ActualPay",propertyValue);
    }
    public static String getOrderSource(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"OrderSource");
    }
    public static void setOrderSource(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"OrderSource",propertyValue);
    }
    public static IEntityDataCollection getOrderDetails(IEntityData data){
        return EntityDataUtils.getChildDatas(data,"OrderDetail");
    }
}