/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetFabdevreqdetResponsePoutFabdet implements Serializable {


    @JsonProperty("FABDEVNO")
    @ColumnAlias("FABDEVNO")
    private String fabdevno;

    @JsonProperty("INIFABTYP")
    @ColumnAlias("INIFABTYP")
    private String inifabtyp;

    @JsonProperty("FABDES")
    @ColumnAlias("FABDES")
    private String fabdes;

    @JsonProperty("FABWGT")
    @ColumnAlias("FABWGT")
    private Short fabwgt;

    @JsonProperty("BSFFABWGT")
    @ColumnAlias("BSFFABWGT")
    private Short bsffabwgt;

    @JsonProperty("KMCHTYP")
    @ColumnAlias("KMCHTYP")
    private String kmchtyp;

    @JsonProperty("MCHGAU")
    @ColumnAlias("MCHGAU")
    private Short mchgau;

    @JsonProperty("INSIDE")
    @ColumnAlias("INSIDE")
    private String inside;

    @JsonProperty("INSIDEDES")
    @ColumnAlias("INSIDEDES")
    private String insidedes;

    @JsonProperty("OUTSIDE")
    @ColumnAlias("OUTSIDE")
    private String outside;

    @JsonProperty("OUTSIDEDES")
    @ColumnAlias("OUTSIDEDES")
    private String outsidedes;

    @JsonProperty("SPFINISH")
    @ColumnAlias("SPFINISH")
    private String spfinish;

    @JsonProperty("SPFINISHDES")
    @ColumnAlias("SPFINISHDES")
    private String spfinishdes;

    @JsonProperty("SPFINISHDES2")
    @ColumnAlias("SPFINISHDES2")
    private String spfinishdes2;

    @JsonProperty("ENZYME")
    @ColumnAlias("ENZYME")
    private String enzyme;

    @JsonProperty("ENZYMEDES")
    @ColumnAlias("ENZYMEDES")
    private String enzymedes;

    @JsonProperty("BDSZE")
    @ColumnAlias("BDSZE")
    private String bdsze;

    @JsonProperty("STR")
    @ColumnAlias("STR")
    private String str;

    @JsonProperty("STRDES")
    @ColumnAlias("STRDES")
    private String strdes;

    @JsonProperty("STRIPEID")
    @ColumnAlias("STRIPEID")
    private String stripeid;

    @JsonProperty("FABCPS_BSF")
    @ColumnAlias("FABCPS_BSF")
    private String fabcpsBsf;

    @JsonProperty("FABCPS")
    @ColumnAlias("FABCPS")
    private String fabcps;

    @JsonProperty("THERMOBD_IND")
    @ColumnAlias("THERMOBD_IND")
    private String thermobdInd;

    @JsonProperty("LDECOROUTE")
    @ColumnAlias("LDECOROUTE")
    private String ldecoroute;

    @JsonProperty("SDECOROUTE")
    @ColumnAlias("SDECOROUTE")
    private String sdecoroute;

    @JsonProperty("DCCODE")
    @ColumnAlias("DCCODE")
    private String dccode;

    @JsonProperty("DCCODELDESC")
    @ColumnAlias("DCCODELDESC")
    private String dccodeldesc;

    @JsonProperty("DCCODELABEL")
    @ColumnAlias("DCCODELABEL")
    private String dccodelabel;

    @JsonProperty("FABDCODELIST")
    @ColumnAlias("FABDCODELIST")
    private String fabdcodelist;

    @JsonProperty("KNSHADETYPDES")
    @ColumnAlias("KNSHADETYPDES")
    private String knshadetypdes;

    @JsonProperty("KNSHADETYP")
    @ColumnAlias("KNSHADETYP")
    private String knshadetyp;

    public String getFabdevno() {
        return this.fabdevno;
    }

    public void setFabdevno(String fabdevno) {
        this.fabdevno = fabdevno;
    }

    public String getInifabtyp() {
        return this.inifabtyp;
    }

    public void setInifabtyp(String inifabtyp) {
        this.inifabtyp = inifabtyp;
    }

    public String getFabdes() {
        return this.fabdes;
    }

    public void setFabdes(String fabdes) {
        this.fabdes = fabdes;
    }

    public Short getFabwgt() {
        return this.fabwgt;
    }

    public void setFabwgt(Short fabwgt) {
        this.fabwgt = fabwgt;
    }

    public Short getBsffabwgt() {
        return this.bsffabwgt;
    }

    public void setBsffabwgt(Short bsffabwgt) {
        this.bsffabwgt = bsffabwgt;
    }

    public String getKmchtyp() {
        return this.kmchtyp;
    }

    public void setKmchtyp(String kmchtyp) {
        this.kmchtyp = kmchtyp;
    }

    public Short getMchgau() {
        return this.mchgau;
    }

    public void setMchgau(Short mchgau) {
        this.mchgau = mchgau;
    }

    public String getInside() {
        return this.inside;
    }

    public void setInside(String inside) {
        this.inside = inside;
    }

    public String getInsidedes() {
        return this.insidedes;
    }

    public void setInsidedes(String insidedes) {
        this.insidedes = insidedes;
    }

    public String getOutside() {
        return this.outside;
    }

    public void setOutside(String outside) {
        this.outside = outside;
    }

    public String getOutsidedes() {
        return this.outsidedes;
    }

    public void setOutsidedes(String outsidedes) {
        this.outsidedes = outsidedes;
    }

    public String getSpfinish() {
        return this.spfinish;
    }

    public void setSpfinish(String spfinish) {
        this.spfinish = spfinish;
    }

    public String getSpfinishdes() {
        return this.spfinishdes;
    }

    public void setSpfinishdes(String spfinishdes) {
        this.spfinishdes = spfinishdes;
    }

    public String getSpfinishdes2() {
        return this.spfinishdes2;
    }

    public void setSpfinishdes2(String spfinishdes2) {
        this.spfinishdes2 = spfinishdes2;
    }

    public String getEnzyme() {
        return this.enzyme;
    }

    public void setEnzyme(String enzyme) {
        this.enzyme = enzyme;
    }

    public String getEnzymedes() {
        return this.enzymedes;
    }

    public void setEnzymedes(String enzymedes) {
        this.enzymedes = enzymedes;
    }

    public String getBdsze() {
        return this.bdsze;
    }

    public void setBdsze(String bdsze) {
        this.bdsze = bdsze;
    }

    public String getStr() {
        return this.str;
    }

    public void setStr(String str) {
        this.str = str;
    }

    public String getStrdes() {
        return this.strdes;
    }

    public void setStrdes(String strdes) {
        this.strdes = strdes;
    }

    public String getStripeid() {
        return this.stripeid;
    }

    public void setStripeid(String stripeid) {
        this.stripeid = stripeid;
    }

    public String getFabcpsBsf() {
        return this.fabcpsBsf;
    }

    public void setFabcpsBsf(String fabcpsBsf) {
        this.fabcpsBsf = fabcpsBsf;
    }

    public String getFabcps() {
        return this.fabcps;
    }

    public void setFabcps(String fabcps) {
        this.fabcps = fabcps;
    }

    public String getThermobdInd() {
        return this.thermobdInd;
    }

    public void setThermobdInd(String thermobdInd) {
        this.thermobdInd = thermobdInd;
    }

    public String getLdecoroute() {
        return this.ldecoroute;
    }

    public void setLdecoroute(String ldecoroute) {
        this.ldecoroute = ldecoroute;
    }

    public String getSdecoroute() {
        return this.sdecoroute;
    }

    public void setSdecoroute(String sdecoroute) {
        this.sdecoroute = sdecoroute;
    }

    public String getDccode() {
        return this.dccode;
    }

    public void setDccode(String dccode) {
        this.dccode = dccode;
    }

    public String getDccodeldesc() {
        return this.dccodeldesc;
    }

    public void setDccodeldesc(String dccodeldesc) {
        this.dccodeldesc = dccodeldesc;
    }

    public String getDccodelabel() {
        return this.dccodelabel;
    }

    public void setDccodelabel(String dccodelabel) {
        this.dccodelabel = dccodelabel;
    }

    public String getFabdcodelist() {
        return this.fabdcodelist;
    }

    public void setFabdcodelist(String fabdcodelist) {
        this.fabdcodelist = fabdcodelist;
    }

    public String getKnshadetypdes() {
        return this.knshadetypdes;
    }

    public void setKnshadetypdes(String knshadetypdes) {
        this.knshadetypdes = knshadetypdes;
    }

    public String getKnshadetyp() {
        return this.knshadetyp;
    }

    public void setKnshadetyp(String knshadetyp) {
        this.knshadetyp = knshadetyp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetFabdevreqdetResponsePoutFabdet)) return false;
        final GetFabdevreqdetResponsePoutFabdet getFabdevreqdetResponsePoutFabdet = (GetFabdevreqdetResponsePoutFabdet) o;
        return Objects.equals(getFabdevno(), getFabdevreqdetResponsePoutFabdet.getFabdevno()) &&
                Objects.equals(getInifabtyp(), getFabdevreqdetResponsePoutFabdet.getInifabtyp()) &&
                Objects.equals(getFabdes(), getFabdevreqdetResponsePoutFabdet.getFabdes()) &&
                Objects.equals(getFabwgt(), getFabdevreqdetResponsePoutFabdet.getFabwgt()) &&
                Objects.equals(getBsffabwgt(), getFabdevreqdetResponsePoutFabdet.getBsffabwgt()) &&
                Objects.equals(getKmchtyp(), getFabdevreqdetResponsePoutFabdet.getKmchtyp()) &&
                Objects.equals(getMchgau(), getFabdevreqdetResponsePoutFabdet.getMchgau()) &&
                Objects.equals(getInside(), getFabdevreqdetResponsePoutFabdet.getInside()) &&
                Objects.equals(getInsidedes(), getFabdevreqdetResponsePoutFabdet.getInsidedes()) &&
                Objects.equals(getOutside(), getFabdevreqdetResponsePoutFabdet.getOutside()) &&
                Objects.equals(getOutsidedes(), getFabdevreqdetResponsePoutFabdet.getOutsidedes()) &&
                Objects.equals(getSpfinish(), getFabdevreqdetResponsePoutFabdet.getSpfinish()) &&
                Objects.equals(getSpfinishdes(), getFabdevreqdetResponsePoutFabdet.getSpfinishdes()) &&
                Objects.equals(getSpfinishdes2(), getFabdevreqdetResponsePoutFabdet.getSpfinishdes2()) &&
                Objects.equals(getEnzyme(), getFabdevreqdetResponsePoutFabdet.getEnzyme()) &&
                Objects.equals(getEnzymedes(), getFabdevreqdetResponsePoutFabdet.getEnzymedes()) &&
                Objects.equals(getBdsze(), getFabdevreqdetResponsePoutFabdet.getBdsze()) &&
                Objects.equals(getStr(), getFabdevreqdetResponsePoutFabdet.getStr()) &&
                Objects.equals(getStrdes(), getFabdevreqdetResponsePoutFabdet.getStrdes()) &&
                Objects.equals(getStripeid(), getFabdevreqdetResponsePoutFabdet.getStripeid()) &&
                Objects.equals(getFabcpsBsf(), getFabdevreqdetResponsePoutFabdet.getFabcpsBsf()) &&
                Objects.equals(getFabcps(), getFabdevreqdetResponsePoutFabdet.getFabcps()) &&
                Objects.equals(getThermobdInd(), getFabdevreqdetResponsePoutFabdet.getThermobdInd()) &&
                Objects.equals(getLdecoroute(), getFabdevreqdetResponsePoutFabdet.getLdecoroute()) &&
                Objects.equals(getSdecoroute(), getFabdevreqdetResponsePoutFabdet.getSdecoroute()) &&
                Objects.equals(getDccode(), getFabdevreqdetResponsePoutFabdet.getDccode()) &&
                Objects.equals(getDccodeldesc(), getFabdevreqdetResponsePoutFabdet.getDccodeldesc()) &&
                Objects.equals(getDccodelabel(), getFabdevreqdetResponsePoutFabdet.getDccodelabel()) &&
                Objects.equals(getFabdcodelist(), getFabdevreqdetResponsePoutFabdet.getFabdcodelist()) &&
                Objects.equals(getKnshadetypdes(), getFabdevreqdetResponsePoutFabdet.getKnshadetypdes()) &&
                Objects.equals(getKnshadetyp(), getFabdevreqdetResponsePoutFabdet.getKnshadetyp());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFabdevno(),
                getInifabtyp(),
                getFabdes(),
                getFabwgt(),
                getBsffabwgt(),
                getKmchtyp(),
                getMchgau(),
                getInside(),
                getInsidedes(),
                getOutside(),
                getOutsidedes(),
                getSpfinish(),
                getSpfinishdes(),
                getSpfinishdes2(),
                getEnzyme(),
                getEnzymedes(),
                getBdsze(),
                getStr(),
                getStrdes(),
                getStripeid(),
                getFabcpsBsf(),
                getFabcps(),
                getThermobdInd(),
                getLdecoroute(),
                getSdecoroute(),
                getDccode(),
                getDccodeldesc(),
                getDccodelabel(),
                getFabdcodelist(),
                getKnshadetypdes(),
                getKnshadetyp());
    }
}