/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf020pk0UpdClrsAddPantoneResponsePoutDetails implements Serializable {


    @ColumnAlias("PANTONE")
    private String pantone;

    @ColumnAlias("LABL")
    private String labl;

    @ColumnAlias("LABA")
    private String laba;

    @ColumnAlias("LABB")
    private String labb;

    @ColumnAlias("RGBR")
    private String rgbr;

    @ColumnAlias("RGBG")
    private String rgbg;

    @ColumnAlias("RGBB")
    private String rgbb;

    @ColumnAlias("COLOUR")
    private String colour;

    public String getPantone() {
        return this.pantone;
    }

    public void setPantone(String pantone) {
        this.pantone = pantone;
    }

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

    public String getRgbr() {
        return this.rgbr;
    }

    public void setRgbr(String rgbr) {
        this.rgbr = rgbr;
    }

    public String getRgbg() {
        return this.rgbg;
    }

    public void setRgbg(String rgbg) {
        this.rgbg = rgbg;
    }

    public String getRgbb() {
        return this.rgbb;
    }

    public void setRgbb(String rgbb) {
        this.rgbb = rgbb;
    }

    public String getColour() {
        return this.colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf020pk0UpdClrsAddPantoneResponsePoutDetails)) return false;
        final ProcRf020pk0UpdClrsAddPantoneResponsePoutDetails procRf020pk0updClrsAddPantoneResponsePoutDetails = (ProcRf020pk0UpdClrsAddPantoneResponsePoutDetails) o;
        return Objects.equals(getPantone(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getPantone()) &&
                Objects.equals(getLabl(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getLabl()) &&
                Objects.equals(getLaba(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getLaba()) &&
                Objects.equals(getLabb(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getLabb()) &&
                Objects.equals(getRgbr(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getRgbr()) &&
                Objects.equals(getRgbg(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getRgbg()) &&
                Objects.equals(getRgbb(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getRgbb()) &&
                Objects.equals(getColour(), procRf020pk0updClrsAddPantoneResponsePoutDetails.getColour());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPantone(),
                getLabl(),
                getLaba(),
                getLabb(),
                getRgbr(),
                getRgbg(),
                getRgbb(),
                getColour());
    }
}