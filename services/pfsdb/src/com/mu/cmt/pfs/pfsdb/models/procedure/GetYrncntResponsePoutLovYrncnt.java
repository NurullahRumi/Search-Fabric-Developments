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

public class GetYrncntResponsePoutLovYrncnt implements Serializable {


    @JsonProperty("YRNCNT")
    @ColumnAlias("YRNCNT")
    private String yrncnt;

    @JsonProperty("YRNCNTDES")
    @ColumnAlias("YRNCNTDES")
    private String yrncntdes;

    public String getYrncnt() {
        return this.yrncnt;
    }

    public void setYrncnt(String yrncnt) {
        this.yrncnt = yrncnt;
    }

    public String getYrncntdes() {
        return this.yrncntdes;
    }

    public void setYrncntdes(String yrncntdes) {
        this.yrncntdes = yrncntdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetYrncntResponsePoutLovYrncnt)) return false;
        final GetYrncntResponsePoutLovYrncnt getYrncntResponsePoutLovYrncnt = (GetYrncntResponsePoutLovYrncnt) o;
        return Objects.equals(getYrncnt(), getYrncntResponsePoutLovYrncnt.getYrncnt()) &&
                Objects.equals(getYrncntdes(), getYrncntResponsePoutLovYrncnt.getYrncntdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getYrncnt(),
                getYrncntdes());
    }
}