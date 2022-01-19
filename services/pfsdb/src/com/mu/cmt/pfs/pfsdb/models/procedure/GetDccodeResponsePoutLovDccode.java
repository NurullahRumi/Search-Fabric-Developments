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

public class GetDccodeResponsePoutLovDccode implements Serializable {


    @JsonProperty("DCCODE")
    @ColumnAlias("DCCODE")
    private String dccode;

    @JsonProperty("LDESC")
    @ColumnAlias("LDESC")
    private String ldesc;

    @JsonProperty("LABEL")
    @ColumnAlias("LABEL")
    private String label;

    public String getDccode() {
        return this.dccode;
    }

    public void setDccode(String dccode) {
        this.dccode = dccode;
    }

    public String getLdesc() {
        return this.ldesc;
    }

    public void setLdesc(String ldesc) {
        this.ldesc = ldesc;
    }

    public String getLabel() {
        return this.label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetDccodeResponsePoutLovDccode)) return false;
        final GetDccodeResponsePoutLovDccode getDccodeResponsePoutLovDccode = (GetDccodeResponsePoutLovDccode) o;
        return Objects.equals(getDccode(), getDccodeResponsePoutLovDccode.getDccode()) &&
                Objects.equals(getLdesc(), getDccodeResponsePoutLovDccode.getLdesc()) &&
                Objects.equals(getLabel(), getDccodeResponsePoutLovDccode.getLabel());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDccode(),
                getLdesc(),
                getLabel());
    }
}