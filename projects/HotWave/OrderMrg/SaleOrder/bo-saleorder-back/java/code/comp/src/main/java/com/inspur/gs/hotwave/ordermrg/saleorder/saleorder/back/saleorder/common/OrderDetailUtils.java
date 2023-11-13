package com.inspur.gs.hotwave.ordermrg.saleorder.saleorder.back.saleorder.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import java.math.BigDecimal;

public final class OrderDetailUtils{
    public static String getID(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"ID");
    }
    public static void setID(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"ID",propertyValue);
    }
    public static String getParentID(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"ParentID");
    }
    public static void setParentID(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"ParentID",propertyValue);
    }
    public static AssoInfoBase getGoods(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"Goods");
    }
    public static void setGoods(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"Goods",propertyValue);
    }
    public static String getSpecification(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Specification");
    }
    public static void setSpecification(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Specification",propertyValue);
    }
    public static Integer getQuality(IEntityData data){
        return (Integer)EntityDataUtils.getValue(data,"Quality");
    }
    public static void setQuality(IEntityData data,Integer propertyValue){
        EntityDataUtils.setValue(data,"Quality",propertyValue);
    }
    public static BigDecimal getPrice(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"Price");
    }
    public static void setPrice(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"Price",propertyValue);
    }
    public static BigDecimal getAmount(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"Amount");
    }
    public static void setAmount(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"Amount",propertyValue);
    }
    public static String getDiscountType(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"DiscountType");
    }
    public static void setDiscountType(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"DiscountType",propertyValue);
    }
    public static BigDecimal getDiscount(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"Discount");
    }
    public static void setDiscount(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"Discount",propertyValue);
    }
    public static BigDecimal getActualAmount(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"ActualAmount");
    }
    public static void setActualAmount(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"ActualAmount",propertyValue);
    }
    public static String getRemark(IEntityData data){
        return (String)EntityDataUtils.getValue(data,"Remark");
    }
    public static void setRemark(IEntityData data,String propertyValue){
        EntityDataUtils.setValue(data,"Remark",propertyValue);
    }
}