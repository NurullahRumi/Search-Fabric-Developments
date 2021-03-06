/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf020pk0QryclrsGetColoursResponsePoutLov implements Serializable {


    @ColumnAlias("LABL")
    private String labl;

    @ColumnAlias("LABA")
    private String laba;

    @ColumnAlias("LABB")
    private String labb;

    @ColumnAlias("DELTAE")
    private String deltae;

    @ColumnAlias("CLRREF")
    private String clrref;

    @ColumnAlias("CLRCODE")
    private String clrcode;

    @ColumnAlias("HEXVAL")
    private String hexval;

    @ColumnAlias("RGBR")
    private Short rgbr;

    @ColumnAlias("RGBG")
    private Short rgbg;

    @ColumnAlias("RGBB")
    private Short rgbb;

    public String getLabl() {
        return this.labl;
    }

    public void setLabl(String labl) {
        this.labl = labl;
    }

    public String getLaba() {
        return this.laba;
    }

    public void setLaba(String laba) {
        this.laba = laba;
    }

    public String getLabb() {
        return this.labb;
    }

    public void setLabb(String labb) {
        this.labb = labb;
    }

    public String getDeltae() {
        return this.deltae;
    }

    public void setDeltae(String deltae) {
        this.deltae = deltae;
    }

    public String getClrref() {
        return this.clrref;
    }

    public void setClrref(String clrref) {
        this.clrref = clrref;
    }

    public String getClrcode() {
        return this.clrcode;
    }

    public void setClrcode(String clrcode) {
        this.clrcode = clrcode;
    }

    public String getHexval() {
        return this.hexval;
    }

    public void setHexval(String hexval) {
        this.hexval = hexval;
    }

    public Short getRgbr() {
        return this.rgbr;
    }

    public void setRgbr(Short rgbr) {
        this.rgbr = rgbr;
    }

    public Short getRgbg() {
        return this.rgbg;
    }

    public void setRgbg(Short rgbg) {
        this.rgbg = rgbg;
    }

    public Short getRgbb() {
        return this.rgbb;
    }

    public void setRgbb(Short rgbb) {
        this.rgbb = rgbb;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf020pk0QryclrsGetColoursResponsePoutLov)) return false;
        final ProcRf020pk0QryclrsGetColoursResponsePoutLov procRf020pk0qryclrsGetColoursResponsePoutLov = (ProcRf020pk0QryclrsGetColoursResponsePoutLov) o;
        return Objects.equals(getLabl(), procRf020pk0qryclrsGetColoursResponsePoutLov.getLabl()) &&
                Objects.equals(getLaba(), procRf020pk0qryclrsGetColoursResponsePoutLov.getLaba()) &&
                Objects.equals(getLabb(), procRf020pk0qryclrsGetColoursResponsePoutLov.getLabb()) &&
                Objects.equals(getDeltae(), procRf020pk0qryclrsGetColoursResponsePoutLov.getDeltae()) &&
                Objects.equals(getClrref(), procRf020pk0qryclrsGetColoursResponsePoutLov.getClrref()) &&
                Objects.equals(getClrcode(), procRf020pk0qryclrsGetColoursResponsePoutLov.getClrcode()) &&
                Objects.equals(getHexval(), procRf020pk0qryclrsGetColoursResponsePoutLov.getHexval()) &&
                Objects.equals(getRgbr(), procRf020pk0qryclrsGetColoursResponsePoutLov.getRgbr()) &&
                Objects.equals(getRgbg(), procRf020pk0qryclrsGetColoursResponsePoutLov.getRgbg()) &&
                Objects.equals(getRgbb(), procRf020pk0qryclrsGetColoursResponsePoutLov.getRgbb());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getLabl(),
                getLaba(),
                getLabb(),
                getDeltae(),
                getClrref(),
                getClrcode(),
                getHexval(),
                getRgbr(),
                getRgbg(),
                getRgbb());
    }
}