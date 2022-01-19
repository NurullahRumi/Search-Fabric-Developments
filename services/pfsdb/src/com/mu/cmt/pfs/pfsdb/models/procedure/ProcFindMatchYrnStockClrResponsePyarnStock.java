/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFindMatchYrnStockClrResponsePyarnStock implements Serializable {


    @ColumnAlias("YRNCOD")
    private String yrncod;

    @ColumnAlias("YRNLOT")
    private String yrnlot;

    @ColumnAlias("CLRREF")
    private String clrref;

    @ColumnAlias("QTY")
    private String qty;

    @ColumnAlias("NYRNCNT")
    private String nyrncnt;

    @ColumnAlias("NFYRNCPS")
    private String nfyrncps;

    @ColumnAlias("NYRNCLR")
    private String nyrnclr;

    @ColumnAlias("NYRNCDES")
    private String nyrncdes;

    @ColumnAlias("NYRNQLTY")
    private String nyrnqlty;

    @ColumnAlias("NYRNSUBQLTYA")
    private String nyrnsubqltya;

    @ColumnAlias("NYRNSUBQLTYB")
    private String nyrnsubqltyb;

    @ColumnAlias("NYRNSUBQLTYC")
    private String nyrnsubqltyc;

    @ColumnAlias("MAXYRNFFCOD")
    private String maxyrnffcod;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("LAB")
    private String lab;

    @ColumnAlias("DELTAE")
    private String deltae;

    @ColumnAlias("PANTONEREF")
    private String pantoneref;

    public String getYrncod() {
        return this.yrncod;
    }

    public void setYrncod(String yrncod) {
        this.yrncod = yrncod;
    }

    public String getYrnlot() {
        return this.yrnlot;
    }

    public void setYrnlot(String yrnlot) {
        this.yrnlot = yrnlot;
    }

    public String getClrref() {
        return this.clrref;
    }

    public void setClrref(String clrref) {
        this.clrref = clrref;
    }

    public String getQty() {
        return this.qty;
    }

    public void setQty(String qty) {
        this.qty = qty;
    }

    public String getNyrncnt() {
        return this.nyrncnt;
    }

    public void setNyrncnt(String nyrncnt) {
        this.nyrncnt = nyrncnt;
    }

    public String getNfyrncps() {
        return this.nfyrncps;
    }

    public void setNfyrncps(String nfyrncps) {
        this.nfyrncps = nfyrncps;
    }

    public String getNyrnclr() {
        return this.nyrnclr;
    }

    public void setNyrnclr(String nyrnclr) {
        this.nyrnclr = nyrnclr;
    }

    public String getNyrncdes() {
        return this.nyrncdes;
    }

    public void setNyrncdes(String nyrncdes) {
        this.nyrncdes = nyrncdes;
    }

    public String getNyrnqlty() {
        return this.nyrnqlty;
    }

    public void setNyrnqlty(String nyrnqlty) {
        this.nyrnqlty = nyrnqlty;
    }

    public String getNyrnsubqltya() {
        return this.nyrnsubqltya;
    }

    public void setNyrnsubqltya(String nyrnsubqltya) {
        this.nyrnsubqltya = nyrnsubqltya;
    }

    public String getNyrnsubqltyb() {
        return this.nyrnsubqltyb;
    }

    public void setNyrnsubqltyb(String nyrnsubqltyb) {
        this.nyrnsubqltyb = nyrnsubqltyb;
    }

    public String getNyrnsubqltyc() {
        return this.nyrnsubqltyc;
    }

    public void setNyrnsubqltyc(String nyrnsubqltyc) {
        this.nyrnsubqltyc = nyrnsubqltyc;
    }

    public String getMaxyrnffcod() {
        return this.maxyrnffcod;
    }

    public void setMaxyrnffcod(String maxyrnffcod) {
        this.maxyrnffcod = maxyrnffcod;
    }

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }

    public String getLab() {
        return this.lab;
    }

    public void setLab(String lab) {
        this.lab = lab;
    }

    public String getDeltae() {
        return this.deltae;
    }

    public void setDeltae(String deltae) {
        this.deltae = deltae;
    }

    public String getPantoneref() {
        return this.pantoneref;
    }

    public void setPantoneref(String pantoneref) {
        this.pantoneref = pantoneref;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFindMatchYrnStockClrResponsePyarnStock)) return false;
        final ProcFindMatchYrnStockClrResponsePyarnStock procFindMatchYrnStockClrResponsePyarnStock = (ProcFindMatchYrnStockClrResponsePyarnStock) o;
        return Objects.equals(getYrncod(), procFindMatchYrnStockClrResponsePyarnStock.getYrncod()) &&
                Objects.equals(getYrnlot(), procFindMatchYrnStockClrResponsePyarnStock.getYrnlot()) &&
                Objects.equals(getClrref(), procFindMatchYrnStockClrResponsePyarnStock.getClrref()) &&
                Objects.equals(getQty(), procFindMatchYrnStockClrResponsePyarnStock.getQty()) &&
                Objects.equals(getNyrncnt(), procFindMatchYrnStockClrResponsePyarnStock.getNyrncnt()) &&
                Objects.equals(getNfyrncps(), procFindMatchYrnStockClrResponsePyarnStock.getNfyrncps()) &&
                Objects.equals(getNyrnclr(), procFindMatchYrnStockClrResponsePyarnStock.getNyrnclr()) &&
                Objects.equals(getNyrncdes(), procFindMatchYrnStockClrResponsePyarnStock.getNyrncdes()) &&
                Objects.equals(getNyrnqlty(), procFindMatchYrnStockClrResponsePyarnStock.getNyrnqlty()) &&
                Objects.equals(getNyrnsubqltya(), procFindMatchYrnStockClrResponsePyarnStock.getNyrnsubqltya()) &&
                Objects.equals(getNyrnsubqltyb(), procFindMatchYrnStockClrResponsePyarnStock.getNyrnsubqltyb()) &&
                Objects.equals(getNyrnsubqltyc(), procFindMatchYrnStockClrResponsePyarnStock.getNyrnsubqltyc()) &&
                Objects.equals(getMaxyrnffcod(), procFindMatchYrnStockClrResponsePyarnStock.getMaxyrnffcod()) &&
                Objects.equals(getWrhnum(), procFindMatchYrnStockClrResponsePyarnStock.getWrhnum()) &&
                Objects.equals(getLab(), procFindMatchYrnStockClrResponsePyarnStock.getLab()) &&
                Objects.equals(getDeltae(), procFindMatchYrnStockClrResponsePyarnStock.getDeltae()) &&
                Objects.equals(getPantoneref(), procFindMatchYrnStockClrResponsePyarnStock.getPantoneref());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getYrncod(),
                getYrnlot(),
                getClrref(),
                getQty(),
                getNyrncnt(),
                getNfyrncps(),
                getNyrnclr(),
                getNyrncdes(),
                getNyrnqlty(),
                getNyrnsubqltya(),
                getNyrnsubqltyb(),
                getNyrnsubqltyc(),
                getMaxyrnffcod(),
                getWrhnum(),
                getLab(),
                getDeltae(),
                getPantoneref());
    }
}