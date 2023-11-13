package com.inspur.gs.hotwave.stock.goodsstock.goodsstock.back.goodsstock.common;
import com.inspur.edp.cef.entity.entity.AssoInfoBase;
import com.inspur.edp.cef.entity.entity.EntityDataUtils;
import com.inspur.edp.cef.entity.entity.IEntityData;
import java.math.BigDecimal;
import java.util.Date;

public final class GoodsStockUtils{
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
    public static AssoInfoBase getMerchantID(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"MerchantID");
    }
    public static void setMerchantID(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"MerchantID",propertyValue);
    }
    public static AssoInfoBase getGoodsID(IEntityData data){
        return (AssoInfoBase)EntityDataUtils.getValue(data,"GoodsID");
    }
    public static void setGoodsID(IEntityData data,AssoInfoBase propertyValue){
        EntityDataUtils.setValue(data,"GoodsID",propertyValue);
    }
    public static BigDecimal getStockNum(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"StockNum");
    }
    public static void setStockNum(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"StockNum",propertyValue);
    }
    public static BigDecimal getDailySalesNum(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"DailySalesNum");
    }
    public static void setDailySalesNum(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"DailySalesNum",propertyValue);
    }
    public static Integer getSafetyStockDays(IEntityData data){
        return (Integer)EntityDataUtils.getValue(data,"SafetyStockDays");
    }
    public static void setSafetyStockDays(IEntityData data,Integer propertyValue){
        EntityDataUtils.setValue(data,"SafetyStockDays",propertyValue);
    }
    public static BigDecimal getSafetyStockNum(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"SafetyStockNum");
    }
    public static void setSafetyStockNum(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"SafetyStockNum",propertyValue);
    }
    public static BigDecimal getInPurchaseNum(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"InPurchaseNum");
    }
    public static void setInPurchaseNum(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"InPurchaseNum",propertyValue);
    }
    public static BigDecimal getInSalesNum(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"InSalesNum");
    }
    public static void setInSalesNum(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"InSalesNum",propertyValue);
    }
    public static BigDecimal getSuggestPurchaseNum(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"SuggestPurchaseNum");
    }
    public static void setSuggestPurchaseNum(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"SuggestPurchaseNum",propertyValue);
    }
    public static BigDecimal getRecentPurchasePrice(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"RecentPurchasePrice");
    }
    public static void setRecentPurchasePrice(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"RecentPurchasePrice",propertyValue);
    }
    public static BigDecimal getStockAmount(IEntityData data){
        return (BigDecimal)EntityDataUtils.getValue(data,"StockAmount");
    }
    public static void setStockAmount(IEntityData data,BigDecimal propertyValue){
        EntityDataUtils.setValue(data,"StockAmount",propertyValue);
    }
}