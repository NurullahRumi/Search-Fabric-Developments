/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetMatchingFabsResponsePfabrics implements Serializable {


    @JsonProperty("SORTSEQ")
    @ColumnAlias("SORTSEQ")
    private BigDecimal sortseq;

    @JsonProperty("FABDEVNO")
    @ColumnAlias("FABDEVNO")
    private String fabdevno;

    @JsonProperty("INIFABDETAILS")
    @ColumnAlias("INIFABDETAILS")
    private String inifabdetails;

    @JsonProperty("DOCID")
    @ColumnAlias("DOCID")
    private String docid;

    @JsonProperty("ORDNUM")
    @ColumnAlias("ORDNUM")
    private String ordnum;

    @JsonProperty("FABSEQ")
    @ColumnAlias("FABSEQ")
    private BigDecimal fabseq;

    @JsonProperty("FABBASENO")
    @ColumnAlias("FABBASENO")
    private String fabbaseno;

    @JsonProperty("TABSRC")
    @ColumnAlias("TABSRC")
    private String tabsrc;

    @JsonProperty("TABSOURCEDET")
    @ColumnAlias("TABSOURCEDET")
    private String tabsourcedet;

    @JsonProperty("PICURL")
    @ColumnAlias("PICURL")
    private String picurl;

    public BigDecimal getSortseq() {
        return this.sortseq;
    }

    public void setSortseq(BigDecimal sortseq) {
        this.sortseq = sortseq;
    }

    public String getFabdevno() {
        return this.fabdevno;
    }

    public void setFabdevno(String fabdevno) {
        this.fabdevno = fabdevno;
    }

    public String getInifabdetails() {
        return this.inifabdetails;
    }

    public void setInifabdetails(String inifabdetails) {
        this.inifabdetails = inifabdetails;
    }

    public String getDocid() {
        return this.docid;
    }

    public void setDocid(String docid) {
        this.docid = docid;
    }

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public BigDecimal getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(BigDecimal fabseq) {
        this.fabseq = fabseq;
    }

    public String getFabbaseno() {
        return this.fabbaseno;
    }

    public void setFabbaseno(String fabbaseno) {
        this.fabbaseno = fabbaseno;
    }

    public String getTabsrc() {
        return this.tabsrc;
    }

    public void setTabsrc(String tabsrc) {
        this.tabsrc = tabsrc;
    }

    public String getTabsourcedet() {
        return this.tabsourcedet;
    }

    public void setTabsourcedet(String tabsourcedet) {
        this.tabsourcedet = tabsourcedet;
    }

    public String getPicurl() {
        return this.picurl;
    }

    public void setPicurl(String picurl) {
        this.picurl = picurl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetMatchingFabsResponsePfabrics)) return false;
        final GetMatchingFabsResponsePfabrics getMatchingFabsResponsePfabrics = (GetMatchingFabsResponsePfabrics) o;
        return Objects.equals(getSortseq(), getMatchingFabsResponsePfabrics.getSortseq()) &&
                Objects.equals(getFabdevno(), getMatchingFabsResponsePfabrics.getFabdevno()) &&
                Objects.equals(getInifabdetails(), getMatchingFabsResponsePfabrics.getInifabdetails()) &&
                Objects.equals(getDocid(), getMatchingFabsResponsePfabrics.getDocid()) &&
                Objects.equals(getOrdnum(), getMatchingFabsResponsePfabrics.getOrdnum()) &&
                Objects.equals(getFabseq(), getMatchingFabsResponsePfabrics.getFabseq()) &&
                Objects.equals(getFabbaseno(), getMatchingFabsResponsePfabrics.getFabbaseno()) &&
                Objects.equals(getTabsrc(), getMatchingFabsResponsePfabrics.getTabsrc()) &&
                Objects.equals(getTabsourcedet(), getMatchingFabsResponsePfabrics.getTabsourcedet()) &&
                Objects.equals(getPicurl(), getMatchingFabsResponsePfabrics.getPicurl());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSortseq(),
                getFabdevno(),
                getInifabdetails(),
                getDocid(),
                getOrdnum(),
                getFabseq(),
                getFabbaseno(),
                getTabsrc(),
                getTabsourcedet(),
                getPicurl());
    }
}