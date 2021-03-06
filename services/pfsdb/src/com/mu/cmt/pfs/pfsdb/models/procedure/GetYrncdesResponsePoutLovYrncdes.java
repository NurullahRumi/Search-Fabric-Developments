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

public class GetYrncdesResponsePoutLovYrncdes implements Serializable {


    @JsonProperty("YRNSHADE")
    @ColumnAlias("YRNSHADE")
    private String yrnshade;

    public String getYrnshade() {
        return this.yrnshade;
    }

    public void setYrnshade(String yrnshade) {
        this.yrnshade = yrnshade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetYrncdesResponsePoutLovYrncdes)) return false;
        final GetYrncdesResponsePoutLovYrncdes getYrncdesResponsePoutLovYrncdes = (GetYrncdesResponsePoutLovYrncdes) o;
        return Objects.equals(getYrnshade(), getYrncdesResponsePoutLovYrncdes.getYrnshade());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getYrnshade());
    }
}