/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryLovSwatchFormatResponse implements Serializable {


    @ColumnAlias("FBFORMATCODE")
    private String fbformatcode;

    @ColumnAlias("DESCRIPTION")
    private String description;

    @ColumnAlias("UOM")
    private String uom;

    @ColumnAlias("MINMTSPERUNIT")
    private Float minmtsperunit;

    public String getFbformatcode() {
        return this.fbformatcode;
    }

    public void setFbformatcode(String fbformatcode) {
        this.fbformatcode = fbformatcode;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUom() {
        return this.uom;
    }

    public void setUom(String uom) {
        this.uom = uom;
    }

    public Float getMinmtsperunit() {
        return this.minmtsperunit;
    }

    public void setMinmtsperunit(Float minmtsperunit) {
        this.minmtsperunit = minmtsperunit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryLovSwatchFormatResponse)) return false;
        final QryLovSwatchFormatResponse qryLovSwatchFormatResponse = (QryLovSwatchFormatResponse) o;
        return Objects.equals(getFbformatcode(), qryLovSwatchFormatResponse.getFbformatcode()) &&
                Objects.equals(getDescription(), qryLovSwatchFormatResponse.getDescription()) &&
                Objects.equals(getUom(), qryLovSwatchFormatResponse.getUom()) &&
                Objects.equals(getMinmtsperunit(), qryLovSwatchFormatResponse.getMinmtsperunit());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFbformatcode(),
                getDescription(),
                getUom(),
                getMinmtsperunit());
    }
}